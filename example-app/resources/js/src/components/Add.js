import React from "react";
import AppContainer from "./AppContainer";

const Add = () => {
    return (
        <AppContainer
        title="ADD POST" 
        >
            <form>
                <div className="form-group">
                    <label>
                        TITLE
                    </label>
                    <input type="text" className="form-control" type="text" />  


                </div>
            </form>

            </AppContainer>
    );
};

export default Add;

