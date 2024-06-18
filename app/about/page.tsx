import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <>
        <div className="flex justify-center">
            <Image
                src="/ucy_chatgpt_art.jpg"
                alt="UCY Logo"
                width={300}
                height={1000}
            />
        </div>
        <div>
            <h1 className="text-xl font-bold mb-2">Who we are</h1>
            <p>
                FOSS Research Centre for Sustainable Energy (FOSS) of the University of 
                Cyprus (UCY), established in 2014 after Cypriot Parliamentary approval, 
                is a research powerhouse in the field of sustainable energy solutions 
                and in particular in solar photovoltaics (PVs) and grid integration. FOSS 
                engages in a range of activities articulating its purpose to have positive 
                impact and benefit the society, environment and climate, as well as bridge 
                the gap between research and practice, link education with state-of-the-art 
                real-life solutions and merge technological developments with practical 
                requirements. These include, research work, consulting and industry 
                services, educational activities, commercialisation of technology through 
                start-ups and licensing agreements.
            </p>

            <h1 className="text-xl font-bold mb-2">Our mission</h1>
            <p>
            The Centre of Excellence will generate an effective R&I culture in Cyprus and the 
            surrounding region, promoting effective cooperation between academia, industry and 
            business sectors, as well as contributing to the transfer of knowledge from 
            advanced European clusters to the region. The Centre will create a test-bed and 
            living lab in the areas of energy and sustainability and will be a major driver to 
            facilitate commercialization of innovation in energy-related fields in Cyprus, 
            Europe and MENA.
            </p>
        </div>
        </>
    );
}