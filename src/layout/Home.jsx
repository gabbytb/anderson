import { Link } from 'react-router-dom';
import { 
    amazon, 
    brandLogo, 
    googlePlay, 
    itunes, 
    itunez, 
    steam 
} from '../assets/img';










const Home = () => {


  return (
    <div id='homeId' className=''>
        <nav className="flex items-center">      
            <ul className='border-r h-24 w-full flex justify-around border text-lg font-semibold text-red-500 flex-row items-center z-50 bg-white'>
                <li className='h-full flex justify-center items-center border-r hover:bg-white ease-in duration-300 w-165'><img className='w-28 h-14' src={brandLogo} alt="" /></li>
                <li className='h-full w-full flex justify-center items-center border-r hover:bg-gray-200 ease-in duration-300 capitalize'>
                    <Link to='/' className='py-8 px-8'>home</Link>
                </li>
                <li className='h-full w-full flex justify-center items-center border-r hover:bg-gray-200 ease-in duration-300 capitalize'>
                    <Link to='/my-cards' className='py-8 px-8'>my cards</Link>
                </li>
                <li className='h-full w-full flex justify-center items-center border-r hover:bg-gray-200 ease-in duration-300 capitalize'>
                    <Link to='/buy-cards' className='py-8 px-8'>buy cards</Link>
                </li>
                <li className='h-full w-full flex justify-center items-center hover:bg-gray-200 ease-in duration-300 capitalize'>        
                    <Link to='/contact-us' className='py-8 px-8'>contact us</Link>
                </li>
            </ul>
        </nav>



        <main className='absplute inset-0'>
            
            {/* Section 1 */}
            <section className='section flex relative inset-0 bg-fp bg-cover bg-double-center'>
                <div className='w-full min-h-full flex flex-col items-center justify-center px-0 pt-64 pb-64'>
                    <div className='container'></div>
                </div>            
            </section>
            {/* The END */}
                
            

            {/* Section 2 */}
            <section className='section relative py-12 px-0 m-auto image-section section-lined'>
                <div className='container container-lined'>
                    <div className='flex h-full m-0 row'>
                        <div className='flex-33 max-w-8xl border-l-2'></div>
                        <div className='flex-33 max-w-8xl border-l-2'></div>
                        <div className='flex-33 max-w-8xl border-l-2'></div>
                    </div>                    
                </div>
                <div className='container'>
                    <div className='flex justify-start w-full row mx-0'>
                        <div className='flex-55 max-w-9xl px-[15px] text-start'>
                            <h3 className='capitalize font-light'>about us</h3>
                            <div className='mt-4'>Check and validate any of your gift cards with just one click of a button</div>
                            <p className='mt-12 text-base'>Verify gift cards online is a leading gift card checking and validation service provider with a repuation for providing fast and accurate gift card validation service to all of its users. Just proceed to the validation page, Upload the front and back of your giftcard and our system will automatically review its validation and activation</p>
                            <br />
                            <br />
                            <div className='arrow_container'>
                                <Link to='#toscroll' className='max-w-full'>
                                    <div className='chevron'></div>
                                    <div className='chevron'></div>
                                    <div className='chevron'></div>
                                    <span className='block w-max'>click to check your gift card</span>
                                </Link>
                            </div>
                            <div className='mt-10'>
                                <Link className='button button-default' to='/my-cards'>
                                    <span className='fas fa-book'> Check Gift Card</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                    <div className='mock-up-1'>
                        <div className='object object-1 bg-white shadow-2xl px-2 py-2 rounded-lg z-10'>
                            <img src={amazon} alt="first object" />
                        </div>
                        <div className='object object-2 bg-white shadow-2xl rounded-lg z-20'>
                            <img src={googlePlay} alt="second object" />
                        </div>
                        <div className='object object-3 bg-white shadow-2xl px-2 py-2 rounded-lg z-20'>
                            <img src={itunes} alt="third object" className='w-full' />
                        </div>
                        <div className='object object-4 z-20'>
                            <img src={itunez} alt="fourth object" className='' />
                        </div>
                        <div className='object object-5 bg-white shadow-2xl rounded-lg z-20'>
                            <img src={steam} alt="fifth object" />
                        </div>
                    </div>
                </div>
            </section>
            {/* The END */}



            <section className='section relative '>
                <div className='container'>
                    
                </div>
            </section>

        </main>
    </div>
  )
}

export default Home