import './appdesign.css'

export default function DropDownRes() {
    return(
        <div className='dropDownRes'>
            <div className='closeBtn'><b>X</b></div>
            <div className='dropDownResSection'>
                <div className='dropDownResSectionLWrap'>
                    <div className='dropDownResresource1'>
                        <div className='header-resources1'>
                            <b>LEARN</b>
                        </div>
                        <ul className='header-resources1Ul'>
                            <li>Blog</li>
                            <li>Customer stories</li>
                            <li>Resource center</li>
                            <li>Guides</li>
                            <li>App download</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='header-resources2Wrap'>
                        <div className='header-resources2'>
                            <div className='header-resources1'>
                                <b>CONNECT</b>
                            </div>
                            <ul className='header-resources1U2'>
                                <li>Events</li>
                                <li>Webinars</li>
                                <li>Podcast</li>
                            </ul>    
                            <div className='header-resources3'>
                                <b>PODCASTS</b>
                            </div>
                            <ul className='header-resources1U3'>
                                <li>All Hands on Tech</li>
                                <li>Perspectives in Leadership</li>
                            </ul>    
                        </div>
                    </div>
                </div>
                <div className='dropDownResSectionRWrap'>
                    <div className='SectionRColumn'>
                        <div className='SectionRClmTitle'>
                        <b>2022 Tech Forecast and Build Better Blueprint</b>
                        </div>
                        <div className='SectionRClmTitle2'>
                            <b>PREPARE FOR SHIFTS AND TRENDS IN THE INDUSTRY</b>
                        </div>
                        <div className='SectionRClmButton'>
                            <button className='SectionClmButtonB'>CHECK IT OUT</button>
                        </div>
                    </div>
                    <div className='SectionR2Column'>
                    </div>
                </div>
            </div>
        </div>
    )
}