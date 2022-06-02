import React from 'react';

export const MonorepoReleaseVersion = '1.0.0-rc.2';
export const MonorepoReleaseDate = 'March 01, 2022';
export const MonorepoReleaseNotes = [
  'Removed root ordering from the protocol',
  'Introduced Foundry solidity-based testing for the smart contracts',
];

export const AgentsReleaseVersion = '1.0.0-rc.2';
export const AgentsReleaseDate= 'March 01, 2022';
export const AgentsReleaseNotes = [
  'Removed root ordering from the protocol',
  'Introduced Foundry solidity-based testing for the smart contracts',
];



export const News = [
  {
      title: <>Nomad's first Audit is OUT!</>,
		href: '/docs/resources/audits',
		date: 'May 31, 2022',
		type: 'Doc',
		description: (
			<>
          We are excited to share with you the first official Audit of the Nomad Protocol, by Quantstamp. We are super excited to have worked with them on the audit, imporving the protocol and documentation along the way.
			</>
		),
	},
  {
      title: <>Nomad's new Education Portal</>,
		href: '/',
		date: 'May 31, 2022',
		type: 'Doc',
		description: (
			<>
				We just launched our new learning portal. You can find here all the information you need to use, build and operate the Nomad Protocol. The future of cross-chain communication is optimistic
                and we want you to be part of it.
			</>
		),
	}
];
