
# React component for auto-resizing iframes

React component for embedding auto-resizing iframes, based on [`iframe-resizer`](https://github.com/davidjbradshaw/iframe-resizer) version `2.8.10` by David Bradshaw.

## Pre-release notice

This is a pre-release of a package belonging to the Lucify platform. It has been published merely to satisfy dependencies of other packages. Any APIs may change without notice.

## Usage 

```jsx
import IFrameEmbed from 'lucify-iframe-embed';
// Use IFrameEmbed as regular React Component
```

The only React prop is `url`, which is the URL for the page to be embedded. The page pointed by `url` should include [`iframeResizer.contentWindow.min.js`](https://github.com/davidjbradshaw/iframe-resizer/blob/v2.8.10/js/iframeResizer.contentWindow.min.js) from the `iframe-resizer` project for automatic resizing to work.

## License

MIT
