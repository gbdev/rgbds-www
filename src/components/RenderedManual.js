import useBrokenLinks from '@docusaurus/useBrokenLinks';

export default function RenderedManual({html, toc}) {
	const registry = useBrokenLinks();
	for (const {value, id, level} of toc) {
		registry.collectAnchor(id);
	}

	return (
		<div className="manual-text" dangerouslySetInnerHTML={{ __html: html }} />
	);
}
