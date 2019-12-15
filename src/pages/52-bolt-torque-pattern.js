import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TorquePatternImage from "../components/torque-pattern-images/52-bolt-torque-pattern"
import AppStoreBadgeImage from "../components/appStoreBadgeImage"
import ScreenshotImage from "../components/image"
import torqueSequences from '../services/torqueSequences';

const bolts = 52;
const torqueSequence = torqueSequences[bolts];

const TorquePattern = () => (
  <Layout>
    <SEO
      title={`${bolts} Bolt Torque Pattern`}
      description={`Torque pattern for ${bolts} bolt flanges. Based on ANSI bolt pattern data.`}
    />
    <div style={{ paddingTop: '20px', textAlign: 'center' }}>
      <h1>{bolts} Bolt Torque Pattern</h1>
      <div style={{ maxWidth: `300px`, margin: 'auto', marginBottom: `1.45rem` }}>
        <TorquePatternImage />
      </div>
      <p><b>Torque Sequence</b>: {torqueSequence.join(', ')}</p>
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
)

export default TorquePattern;
