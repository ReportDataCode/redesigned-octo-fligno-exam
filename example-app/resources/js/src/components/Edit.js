import React from "react";
import AppContainer from "./AppContainer";

const Edit = () => {
    return (
        <AppContainer
        title="EDIT POST"
        >
            <form>
                <div className="form-group">
                    <label>title</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>
                            Description
                        </label>
                        <textarea className="form-control" ></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="button">
                                Save

                            </button>
                        </div>
            </form>
        </AppContainer>
        
    );
};

export default Add;

