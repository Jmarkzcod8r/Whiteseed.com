import React from 'react';
import './Homes.scss';
import Leaderboard from './Leaderboard';
// import Options from './Options';

const Homes = () => {
    return(
        // <div className="App">
           <div id="App_body" class="App_body">
        <div id="Row_zero">
            
        </div>
        <div id="Row_one">
            <div id="Row_one_column_one">
                sda
            </div>
            <div id="Row_one_column_two">
                <h3><strong>Question 1</strong></h3>
                <p><strong>How many years did Joseph spent when he was imprisoned due to a wrongful accusation?</strong></p>
            </div>
            <div id="Row_one_column_three">
            <Leaderboard/>
            </div>
            
        </div>
        <div id="Row_two">
            {/* <Options/> */}
            <div id="Row_two_column_one">

            </div>
            <div id="Row_two_column_two">
                {/* <div id="Row_two_column_two_row_one">
                    asdas
                </div> */}
                {/* <Options/> */}

                <div id="Row_two_column_two_col_one">
                    <button id="Row_two_column_two_col_one_row_one">
                        asd
                    </button>
                    <button id="Row_two_column_two_col_one_row_two">
                            ad
                    </button>
                </div>

                <div id="Row_two_column_two_col_two">
                    <button id="Row_two_column_two_col_two_row_one">
                        asd
                    </button>
                    <button id="Row_two_column_two_col_two_row_two">
                        asdsadas
                    </button>

               
                </div>

            </div>
            <div id="Row_two_column_three">
          
            </div>

                
        </div>
        <div>
       
        </div>


    </div>

        // </div>
    );
}

export default Homes;