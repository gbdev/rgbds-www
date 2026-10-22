import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function ReleaseDate({ version }) {
  const date = usePluginData('release-dates')[version];
  return date ? <p>Released on <time dateTime={date}>{date}</time>.</p> : null;
}
