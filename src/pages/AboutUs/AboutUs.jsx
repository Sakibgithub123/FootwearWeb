import React from 'react';
import aboutaImg from "../../assets/img/about/about-us.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const AboutUs = () => {
    return (
        <div>
            <div>
                <img src={aboutaImg} alt="about img" />
            </div>
            <div className='max-w-4xl mx-auto'>
                {/* <h2 className='text-orange-300 pt-10 pb-5 text-semibold text-xl'>About</h2> */}
                <SectionTitle heading={'About'}></SectionTitle>
                <p className='text-justify text-sm intend-1.5 text-stone-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid fugiat temporibus vitae minus hic magnam recusandae sapiente magni
                    commodi tempora est doloribus iure ducimus nam vero dignissimos porro illo,
                    eius alias qui beatae fugit! Molestiae odit eveniet sint? Velit soluta asperiores
                    illum accusamus natus repellat ut dolorem exercitationem tenetur quae eaque sequi
                    repudiandae, quibusdam dignissimos sapiente illo maxime delectus animi, alias labore eligendi distinctio vel dolor suscipit.
                    Quas harum aspernatur consectetur soluta consequuntur excepturi suscipit sed,
                    fugit fugiat asperiores magnam impedit fuga at libero. Sequi sed nobis aliquid
                    odit, voluptates totam, corporis reiciendis illo, ratione obcaecati quidem neque
                    consequuntur nostrum?
                </p>

            </div>

        </div>
    );
};

export default AboutUs;