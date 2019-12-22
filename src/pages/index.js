import React from "react"
import { Link } from "gatsby"

import styles from './index.module.css';
import Layout from "../components/layout"
import Image from "../components/image"
import AppStoreBadgeImage from "../components/appStoreBadgeImage"
import SEO from "../components/seo"
import tables from '../components/_tables';
import sequences from '../services/torqueSequences';

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Flange Bolt Chart - Size & Torque" 
      description="Flange Bolt Size Chart and Torque Patterns. Lookup bolt lengths, wrench sizes, and torque patters using the Flange Bolt app."
    />
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>Flange Bolt Chart</h1>
        <div className={styles.subheader}>
          <p>Lookup flange bolt lengths, wrench sizes, and torque sequences right on your phone. In seconds.</p>
        </div>
        <div className={styles.appStoreBadgeContainer}>
          <a target="_blank" href="itms-apps://itunes.apple.com/us/app/id1489122965?mt=8">
            <AppStoreBadgeImage />
          </a>
        </div>
        <p className={styles.caption}><i>Don't want to download the app? <br /> Scroll down for full size charts.</i></p>
      </div>
      <div className={styles.imageContainer}>
        <div style={{ maxWidth: `300px`, margin: 'auto', marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </div>
    <div className={styles.tablesContainer}>
      <h3>Flange Bolt Chart - Bolt Lengths, Wrench Sizes & Torque Patterns</h3>
      <h4>150 LB. Flanges</h4>
      <tables.Class150 />
      <h4>300 LB. Flanges</h4>
      <tables.Class300 />
      <h4>600 LB. Flanges</h4>
      <tables.Class600 />
      <h4>900 LB. Flanges</h4>
      <tables.Class900 />
      <h4>1500 LB. Flanges</h4>
      <tables.Class1500 />
      <h4>2500 LB. Flanges</h4>
      <tables.Class2500 />
    </div>
    <div className={styles.torquePatternsContainers}>
      {
        Object.keys(sequences).map((bolts) => (
          <p>
            <Link to={`${bolts}-bolt-torque-pattern`}>{bolts} Bolt Torque Pattern</Link>
          </p>
        ))
      }
    </div>
    <div className={styles.aboutTheAppContainer}>
      <h3>About the App</h3>
      <p>
        Look up flange bolt sizes and torque patterns in three taps with Flange Bolt.&nbsp;
      </p>
      <p>
        Just enter the flange size, type, and class, and the tool instantly shows the ASME values for:
      </p>
      <p>1. Number of studs</p>
      <p>2. Diameter of studs</p>
      <p>3. Length of studs</p>
      <p>4. Torque pattern</p>
      <p>5. Suggested torque amount</p>
      <p>
        All values other than suggested torque amount are sourced directly from flange bolt charts and flange torque charts in the ASME B16.5 "Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24 Metric/Inch Standard" (2017).
      </p>
      <p>
        Looking up flange bolt sizes and torque patterns with Flange Bolt is far faster and less error prone than searching through PDF charts and tables. The sole purpose of the tool is to make it as simple as possible for a pipefitters, steamfitters, and others working in piping to look up flange bolt size and torque pattern information.&nbsp;
      </p>
      <p>
        Is there a feature you'd like from Flange Bolt that you don't see? Request it through the app and we'll do our best to add it to the development schedule.
      </p>
      <p>Features of the app:</p>
      <p>
        1. Full offline capability: No internet connection necessary to use. All data is stored locally on your phone. (The app requires minimum storage space overall)
      </p>
      <p>
        2. Instant flange bolt sizes and torque patterns: Just enter the flange size, class, and type and the app instantly populates the correct values from the flange bolt size chart and the flange torque sequence chart, along with wrench size.
      </p>
      <p>
        3. Flange torque sequence image: Each lookup shows the correct flange torque sequence image in picture form, with the studs numbered.
      </p>
      <p>
        4. Suggested torque values
      </p>
      <p>The information in this app covers:</p>
      <p>
        (1) flanges with rating class designations 150, 300, 400, 600, 900, and 1500 in sizes NPS 1/2 through NPS 24 and flanges with rating class designation 2500 in sizes NPS 1/2 through NPS 12, with requirements given in U.S. Customary units with diameter of bolts and flange bolt holes expressed in inch units;
      </p>
      <p>
        (2) flanged fittings with rating class designation 150 and 300 in sizes NPS 1/2 through NPS 24, with requirements given in U.S. Customary units with diameter of bolts and flange bolt holes expressed in inch units;
      </p>
      <p>
        (3) flanged fittings with rating class designation 400, 600, 900, and 1500 in sizes NPS 1/2 through NPS 24 and flanged fittings with rating class designation 2500 in sizes NPS 1/2 through NPS 12 &nbsp;in U.S. Customary units.
      </p>
      <p>That includes:</p>
      <p>- 4 bolt flange pattern</p>
      <p>- 8 bolt flange pattern</p>
      <p>- 12 bolt flange pattern</p>
      <p>- 16 bolt flange pattern</p>
      <p>- 20 bolt flange pattern</p>
      <p>- 14 bolt flange pattern</p>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
