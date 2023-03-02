import React from 'react';
import {Data} from "../../data";

const Partner = () => {
  return (
    <>
        <div className='partner'>
            <div className='partner__container'>
             <div className='partner__container__para'>
                <p>Project Baseline was created to explore health with more depth and detail than ever before. Whereas once it took centuries of exploration to yield an accurate map of the world, we can now move faster and create a map of human health that can impact humanity within our lifetimes.</p>
             </div>  
             <div className='partner__container__logo'>          
                <a href='/'>
                <img src="https://lh3.googleusercontent.com/bkdVne9cufy6o8uFt2QOR1uecnRDzzO7Jb-qkkPuKpSeynleiziinZrqLr830QT5k_3vbHaa0mPTbDlN3YMTv2l_iVWEHNhTEqhk9w=w220-rw-v1" alt="standford" />
                </a>
                <a href='/'>
                <img src="https://lh3.googleusercontent.com/hiPVdBpdrvaIZie42HDfc0haoROVW2rsKlSZ-SVsbq0GtaHJ50f5e-ZNvepnxTczzaEy9jcP1H0FdzHztPGabJ6HrrI2is4Cu9y3Cg=w220-rw-v1" alt="Duke" />
                </a>
                <a href='/'>
                <img src="https://lh3.googleusercontent.com/PIMDcn2y8uPxuoUbcnjAxabx1csTrft8Vw_dUKB0fZ5nNTfa_ISKxJzd74NCZqHhuKvHXu3COkAxqOIxkE0_WFcFMl1U0PeJF4FupcU=w220-rw-v1" alt="Ameri" />
                </a>
                <a href='/'>
                <img src="https://lh3.googleusercontent.com/U425_HHLHyHcXUQf4bDDwU3S83a_CJutmc7ODQtI0YoP_aPrVlSIyNjxQlL2x_lR8Vq6DdrN9qkmpXarlCDPVmG_HNN0pwt0ZRTVrA=w220-rw-v1" alt="google" />
                </a>

             </div>
             <div className='partner__container__member'>
                <h2>As a Baseline member, you can</h2>
                <div className='partner__container__member__type'>
                    {Data?.member.map((item) => {
                        return(
                            <div className='member-data'>
                           <img src={item.img} alt="hdj"></img>
                           <h3>{item.title}</h3>
                           <p>{item.desc}</p>
                           <a href={item.page_url}>Learn more</a>
                           </div>
                        )
                           
                    })}

                </div>

             </div> 
             </div>
        </div>      
    </>
  )
}

export default Partner
