import React from "react";
import BodyWithCorrect from "./BodyWithCorrect";
import BodyWithoutCorrect from "./BodyWithoutCorrect";
import { Routes, Route } from 'react-router-dom'


const BodyCorr = (props) => {
    return (
        <div>
            <Routes>
                <Route exact path='/withCorrect/*' element={<BodyWithCorrect />} />
                <Route exact path='/withoutCorrect/*' element={<BodyWithoutCorrect />} />
                <Route exact path='/' element={<BodyWithoutCorrect />} />
            </Routes>
        </div>
    )
}
export default BodyCorr