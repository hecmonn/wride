import React,{Component} from 'react';

class Search extends Component{
    render(){
        return (
            <div className="un-cont search-btn" >
                <span className="icon search-icon" id="search-flag" ></span>
                <div className="search-form-holder">
                    <form id="search-form" action="#" method="get">
                        <input type="text" placeholder="Search Wrid" id="search-holder" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;
