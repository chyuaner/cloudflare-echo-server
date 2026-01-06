import { ImageResponse } from '@cf-wasm/og';
import { tabler_icons_html } from './html.js';

const baseFontSize = 22;

// iconCache to avoid repetitive base64 encoding
const iconCache = new Map();

// Optimized helper to create React-element-like objects
const h = (type, props, ...children) => {
    const style = props.style || {};
    
    // Satori rule: elements with > 1 children should have explicit display
    // We default everything to flex since that's what Satori expects
    // Flattening and filtering is expensive, we do it minimally
    const flatChildren = children.flat(2).filter(c => c != null && c !== false);

    if (flatChildren.length > 1 && !style.display) {
        style.display = 'flex';
    }

    return {
        type,
        props: {
            ...props,
            style,
            children: flatChildren.length === 1 ? flatChildren[0] : flatChildren
        }
    };
};

function icon(name) {
    const svg = tabler_icons_html[name];
    if (!svg) return null;
    
    if (!iconCache.has(name)) {
        const b64 = typeof btoa === 'function' 
            ? btoa(svg) 
            : Buffer.from(svg).toString('base64');
        iconCache.set(name, b64);
    }
    
    return h('img', {
        src: `data:image/svg+xml;base64,${iconCache.get(name)}`,
        width: 24,
        height: 24,
        style: { marginRight: 8 }
    });
}

// Optimized list generator: added limit to reduce DOM nodes
function objectToListElements(obj, limit = 20) {
    const entries = Object.entries(obj).filter(([, v]) => v !== null && v !== undefined);
    const displayEntries = entries.slice(0, limit);
    const hasMore = entries.length > limit;

    const list = displayEntries.map(([k, v]) => {
        return h('div', { 
            style: { 
                display: 'flex', 
                flexDirection: 'row', 
                fontSize: baseFontSize - 2, 
                marginBottom: 2, 
                width: '100%',
                overflow: 'hidden'
            } 
        },
            h('span', { style: { fontWeight: 'bold', marginRight: 5, color: '#666', flexShrink: 0 } }, `${k}:`),
            h('span', { style: { wordBreak: 'break-all', color: '#333', flex: 1, height: 26, overflow: 'hidden' } }, String(v))
        );
    });

    if (hasMore) {
        list.push(h('div', { style: { color: '#999', fontSize: 16, marginTop: 4 } }, `... and ${entries.length - limit} more`));
    }
    return list;
}

function hostCard(hostData) {
    return h('div', { 
        style: { 
            display: 'flex', 
            flexDirection: 'column', 
            border: '1px solid #ddd', 
            padding: 20, 
            backgroundColor: 'white',
            flex: 1,
            width: '100%',
            overflow: 'hidden'
        } 
    },
        h('h2', { style: { display: 'flex', alignItems: 'center', fontSize: baseFontSize, margin: '0 0 10px 0' } },
            icon('cloud_network'),
            'Host'
        ),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: 5, width: '100%' } },
            ...objectToListElements(hostData, 10)
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

function filterUrl(originalUrl) {
    if (!originalUrl) return "";
    try {
        const url = new URL(originalUrl, "http://localhost");
        url.searchParams.delete("echo_method");
        url.searchParams.delete("echo_postbody");
        let target = url.pathname + url.search;
        if (target === "/?") target = "/";
        return target;
    } catch (e) {
        return originalUrl;
    }
}

function endpointBar(responseBody) {
    const method = responseBody.http.method;
    const colors = METHOD_COLORS[method] || { bg: '#eee', border: '#444' };

    return h('div', {
        style: {
            borderWidth: '2px',
            borderStyle: 'solid',
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
                fontWeight: 700,
                fontSize: baseFontSize + 'px',
                textTransform: 'uppercase',
                lineHeight: 1,
                backgroundColor: colors.border,
                marginRight: '16px'
            }
        }, method),
        h('span', {
            style: {
                fontWeight: 600,
                fontSize: (baseFontSize + 2) + 'px',
                wordBreak: 'break-all',
                color: '#333'
            }
        }, `${responseBody.http.protocol}://${responseBody.host.hostname}${filterUrl(responseBody.http.originalUrl)}`)
    );
}

export function generateOgImage(responseBody) {
    const method = responseBody.http.method;
    const bodyRaw = responseBody.request.bodyRaw;
    
    const showBody = !((method === 'GET' || method === 'HEAD') && (!bodyRaw || bodyRaw.trim() === ''));
    
    // Performance optimization: Manual 2-column layout instead of flexWrap
    const headerElements = objectToListElements(responseBody.request.headers, 24);
    const mid = Math.ceil(headerElements.length / 2);
    const leftHeaders = headerElements.slice(0, mid);
    const rightHeaders = headerElements.slice(mid);

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
        endpointBar(responseBody),

        h('div', { style: { display: 'flex', width: '100%', flex: 1, gap: 20 } },
            // Left Column (Request info)
            h('div', { 
                style: { 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flex: 3,
                    border: '1px solid #ddd',
                    padding: 15,
                    backgroundColor: 'white',
                    overflow: 'hidden'
                } 
            },
                // Post Body block (if exists)
                showBody ? h('div', { style: { display: 'flex', flexDirection: 'column', marginBottom: 15 } },
                    h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: 5 } },
                        icon('file'),
                        h('span', { style: { fontSize: baseFontSize, fontWeight: 'bold' } }, 'Post Body')
                    ),
                    h('div', { 
                        style: { 
                            display: 'flex',
                            backgroundColor: '#f8f9fa', 
                            padding: 10, 
                            fontFamily: 'monospace',
                            fontSize: baseFontSize - 4,
                            maxHeight: 120,
                            overflow: 'hidden',
                            wordBreak: 'break-all',
                            color: '#444',
                            border: '1px solid #eee'
                        } 
                    }, (bodyRaw || '').substring(0, 300) + (bodyRaw && bodyRaw.length > 300 ? '...' : ''))
                ) : null,

                // Header blockTitle
                h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: 10 } },
                    icon('http_head'),
                    h('span', { style: { fontSize: baseFontSize, fontWeight: 'bold' } }, 'Headers')
                ),

                // Manual 2-column list
                h('div', { style: { display: 'flex', flexDirection: 'row', width: '100%', gap: 10 } },
                    h('div', { style: { display: 'flex', flexDirection: 'column', flex: 1 } }, ...leftHeaders),
                    h('div', { style: { display: 'flex', flexDirection: 'column', flex: 1 } }, ...rightHeaders)
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
