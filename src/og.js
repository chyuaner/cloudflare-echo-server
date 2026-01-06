import { ImageResponse } from '@cf-wasm/og';
import { tabler_icons_html } from './html.js';

// Helper to create React-element-like objects
const h = (type, props, ...children) => {
    const filteredChildren = children.flat().filter(c => c != null && c !== false);
    const style = props.style || {};
    
    // Satori rule: elements with > 1 children should have explicit display
    // We default everything to flex since that's what Satori expects
    if (filteredChildren.length > 1 && !style.display) {
        style.display = 'flex';
    }

    return {
        type,
        props: {
            ...props,
            style,
            children: filteredChildren
        }
    };
};

function icon(name) {
    const svg = tabler_icons_html[name];
    if (!svg) return null;
    const b64 = typeof btoa === 'function' 
        ? btoa(svg) 
        : Buffer.from(svg).toString('base64');
    
    return h('img', {
        src: `data:image/svg+xml;base64,${b64}`,
        width: 24,
        height: 24,
        style: { marginRight: 8 }
    });
}

function objectToListElements(obj) {
    const entries = Object.entries(obj).filter(([, v]) => v !== null && v !== undefined);
    if (entries.length === 0) return [];

    return entries.map(([k, v]) => {
        if (typeof v === 'object' && v !== null) {
            return h('div', { style: { display: 'flex', flexDirection: 'column', marginLeft: 10, width: '100%' } },
                h('span', { style: { fontWeight: 'bold', wordBreak: 'break-all', width: '100%' } }, `${k}:`),
                ...objectToListElements(v)
            );
        }
        return h('div', { style: { display: 'flex', flexDirection: 'row', fontSize: 14, marginBottom: 4, width: '100%' } },
            h('span', { style: { fontWeight: 'bold', marginRight: 5, color: '#666', flexShrink: 0 } }, `${k}:`),
            h('span', { style: { wordBreak: 'break-all', color: '#333', flex: 1 } }, String(v))
        );
    });
}

function hostCard(hostData) {
    return h('div', { 
        style: { 
            display: 'flex', 
            flexDirection: 'column', 
            border: '1px solid #ddd', 
            borderRadius: 12, 
            padding: 20, 
            backgroundColor: 'white',
            flex: 1,
            width: '100%',
            overflow: 'hidden'
        } 
    },
        h('h2', { style: { display: 'flex', alignItems: 'center', fontSize: 24, margin: '0 0 10px 0' } },
            icon('cloud_network'),
            'Host'
        ),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: 5, width: '100%' } },
            ...objectToListElements(hostData)
        )
    );
}

const METHOD_COLORS = {
    GET: { bg: 'rgba(97, 175, 254, 0.1)', border: '#61affe' },
    POST: { bg: 'rgba(73, 204, 144, 0.1)', border: '#49cc90' },
    PUT: { bg: 'rgba(252, 161, 48, 0.1)', border: '#fca130' },
    DELETE: { bg: 'rgba(249, 62, 62, 0.1)', border: '#f93e3e' },
    PATCH: { bg: 'rgba(80, 227, 194, 0.1)', border: '#50e3c2' },
    HEAD: { bg: 'rgba(144, 18, 254, 0.1)', border: '#9012fe' },
    OPTIONS: { bg: 'rgba(13, 90, 167, 0.1)', border: '#0d5aa7' },
};

function endpointBar(responseBody) {
    const method = responseBody.http.method;
    const colors = METHOD_COLORS[method] || { bg: '#eee', border: '#444' };

    return h('div', {
        style: {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            fontFamily: 'monospace',
            backgroundColor: colors.bg,
            borderColor: colors.border,
        }
    },
        h('span', {
            style: {
                color: 'white',
                padding: '4px 12px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                lineHeight: 1,
                backgroundColor: colors.border,
                marginRight: '16px'
            }
        }, method),
        h('span', {
            style: {
                fontWeight: 600,
                fontSize: '16px',
                wordBreak: 'break-all',
                color: '#333'
            }
        }, `${responseBody.http.protocol}://${responseBody.host.hostname}${responseBody.http.originalUrl}`)
    );
}

export function generateOgImage(responseBody) {
    const method = responseBody.http.method;
    const bodyRaw = responseBody.request.bodyRaw;
    
    // Check if we should display body
    const showBody = !((method === 'GET' || method === 'HEAD') && (!bodyRaw || bodyRaw.trim() === ''));
    
    // Headers processing - Get individual elements
    const headerElements = objectToListElements(responseBody.request.headers);
    
    // Prepare ALL items for the wrap container
    const requestItems = [];
    
    // 1. Post Body block
    if (showBody) {
        let displayContent = bodyRaw || '';
        if (displayContent.length > 500) {
           displayContent = displayContent.substring(0, 500) + '... [Truncated]';
        }
        
        requestItems.push(
            h('div', { style: { display: 'flex', flexDirection: 'column', marginBottom: 20, width: '46%' } },
                h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: 10 } },
                    icon('file'),
                    h('span', { style: { fontSize: 20, fontWeight: 'bold' } }, 'Post Body')
                ),
                h('div', { 
                    style: { 
                        display: 'flex',
                        backgroundColor: '#f8f9fa', 
                        padding: 12, 
                        borderRadius: 8, 
                        fontFamily: 'monospace',
                        fontSize: 14,
                        maxHeight: 250,
                        overflow: 'hidden',
                        wordBreak: 'break-all',
                        color: '#444',
                        border: '1px solid #eee',
                        width: '100%'
                    } 
                }, displayContent)
            )
        );
    }
    
    // 2. Header Title block
    requestItems.push(
        h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: 10, width: '48%' } },
            icon('http_head'),
            h('span', { style: { fontSize: 20, fontWeight: 'bold' } }, 'Header')
        )
    );

    // 3. Spreading individual header items
    headerElements.forEach(el => {
        const item = { ...el };
        item.props = { 
            ...el.props,
            style: {
                ...el.props.style,
                width: '48%', 
            }
        };
        requestItems.push(item);
    });

    const element = h('div', {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f2f5',
            padding: 15,
            fontFamily: 'sans-serif',
            color: '#333'
        }
    },
        // 1. Top Bar: Endpoint Info
        endpointBar(responseBody),

        // 2. Bottom Area: Two Columns
        h('div', { style: { display: 'flex', width: '100%', flex: 1, gap: 20 } },
            // Left Column (Request info)
            h('div', { 
                style: { 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flex: 3,
                    border: '1px solid #ddd',
                    borderRadius: 12,
                    padding: 25,
                    backgroundColor: 'white',
                    // height: 480, 
                    overflow: 'hidden'
                } 
            },
                h('div', { style: { display: 'flex', fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#999' } }, ''),
                h('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        width: '100%',
                        // height: 480, // 核心高度：增加到 450px 減少換到第三欄的機率
                        columnGap: 10, // 強制使用較大的固定像素間距
                        rowGap: 0
                    }
                },
                    ...requestItems
                )
            ),
            
            // Right Column (Host info)
            h('div', { style: { display: 'flex', flexDirection: 'column', flex: 1} },
                hostCard(responseBody.host)
            )
        )
    );

    return new ImageResponse(element, {
        width: 1200,
        height: 630,
    });
}
