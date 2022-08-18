import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';
import { motion } from 'framer-motion';
import {slideUpVariant} from "../../styles/animations";

export const Vision: React.FC = () => {

  return (
    <Fragment>
      <div className='vision'>
        <img src="/strip.png" alt=""/>
        <h1 className='title'>Lodestar is making it possible for <em>anyone</em> to participate.</h1>
        <motion.div 
        className='vision--properties'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={slideUpVariant}className='property'>
            <img src="/prop1.png" alt="" />
            <h1>Maximal security, minimal trust, endless opportunities.</h1>
            <p>Using Lodestar to secure the Ethereum network brings us closer to a world with greater privacy, sovereignty, and sustainability.</p>
          </motion.div>
          <motion.div variants={slideUpVariant} className='property'>
            <img src="/prop22.png" alt="" />
            <h1>Lowering the barrier to greater sovereignty.</h1>
            <p>We’re working to improve Ethereum usability, advocating for decentralization, and expanding access so more developers can get involved.</p>
          </motion.div>
        </motion.div>
        <div className='vision--lightclients'>
          <img src="/text.png" alt="" />
          <h1>
            Light Client Ethereum: a node on every device.
          </h1>
          <p>Light clients enable more people to participate as first-class citizens, verifying data on the blockchain without relying on a centralized party. Lodestar is <a href="https://blog.chainsafe.io/the-road-ahead-for-ethereum-light-clients-b6fdb7c3b603" target="__blank" rel="noopener noreferrer">actively contributing</a> to light client development for Ethereum.</p>
          <div className='button-group'>
            <a href="https://lodestar-lightclient.chainsafe.io/" target="__blank" rel="noopener noreferrer"><Button primary>Try the demo</Button></a>
            {/* <a href="" target="__blank" rel="noopener noreferrer"><Button dark>Contribute to R&D</Button></a> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
