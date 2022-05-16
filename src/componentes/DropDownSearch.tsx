import './appdesign.css'

export default function DropDownSearch() {
    return(
        <div className='dropDownSearch'>
            <div className='dropDownSearchWrap'>
                <div className='dropDownSearchWrapInner'>            
                    <div className='closeBtn2'><b>X</b></div>
                    <div className='dropDownSearchInnerCnt'>
                        <div className='searchBarCnt'>
                            <input className='header-search' type='text' name='q' placeholder='What do you want to learn?'></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}