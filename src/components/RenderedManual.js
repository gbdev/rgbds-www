import useBrokenLinks from '@docusaurus/useBrokenLinks';

export default function RenderedManual({html}) {
	// TODO: `useBrokenLinks().collectAnchor()`
	return (
		<div className="manual-text" dangerouslySetInnerHTML={{ __html: html }} />
	);
}
