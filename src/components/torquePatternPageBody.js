import PropTypes from "prop-types"
import React from "react"
import Layout from "./layout"
import SEO from "./seo"
import Helmet from "react-helmet"
import torquePatternImages from './torque-pattern-images';
import torqueSequences from '../services/torqueSequences';
import ScreenshotImage from './image';
import AppStoreBadgeImage from './appStoreBadgeImage';

const TorquePatternPageBody = ({ bolts }) => {
  const torqueSequence = torqueSequences[bolts];
  const sequenceString = torqueSequence.join(', ');

  const PatternImage = torquePatternImages[`bolt${bolts}`];

  return (
    <Layout>
      <SEO
        title={`${bolts} Bolt Torque Pattern`}
        description={`Torque pattern for ${bolts} bolt flanges. Based on ANSI bolt pattern data.`}
      />
      <Helmet>
        {/* inline script elements */}
        <script type="application/ld+json">{`
            {
                "@context": "http://schema.org",
                "@type": "Article",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.flangeboltchart.com/${bolts}-bolt-torque-pattern"
                },
                "headline": "${bolts} Bolt Torque Pattern",
                "description": "Torque pattern for ${bolts} bolt flanges. Bolt sequence: ${sequenceString}.",
                "image": "https://www.flangeboltchart.com/torque-patterns/${bolts}_bolt.png",
                "datePublished": "2019-12-18T08:00:00+08:00",
                "dateModified": "2019-12-18T09:20:00+08:00",
                "author": {
                  "@type": "Organization",
                  "name": "Flange Bolt Chart"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Flange Bolt Chart",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.flangeboltchart.com/app_icon.png"
                  }
                }
            }
        `}</script>
      </Helmet>
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
        <h1>{bolts} Bolt Torque Pattern</h1>
        <div style={{ maxWidth: `300px`, margin: 'auto', marginBottom: `1.45rem` }}>
          <PatternImage />
        </div>
        <p><b>Torque Sequence</b>: {sequenceString}</p>
        <p>For {bolts} bolt flanges, torque bolts in a criss-cross sequence.</p>
        <hr />
        <h3>Lookup flange bolt torque patterns on your phone in seconds</h3>
        <div>
          <div style={{ maxWidth: `300px`, margin: 'auto', marginBottom: `0.5rem`, paddingLeft: '20px' }}>
            <ScreenshotImage />
          </div>
          <div style={{ maxWidth: '120px', margin: 'auto' }}>
            <a target="_blank" href="itms-apps://itunes.apple.com/us/app/id1489122965?mt=8">
              <AppStoreBadgeImage />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

TorquePatternPageBody.propTypes = {
  bolts: PropTypes.number,
}

export default TorquePatternPageBody;
