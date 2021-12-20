import React from 'react';

const Cardx = ({username, userGrade, children}) => {
    return (
        <div style={{direction:"rtl"}} className="normal-shadow p-4 rounded-xl my-4 mx-8">
            <div className="flex items-center mb-8 my-4 ">
                <span className="bg-white rounded-full block normal-shadow w-16 h-16 ml-4"></span>
                <div className="cardx-userDetails">
                    <h4 className="text-2xl mb-3 font-bold">
                        {username}
                    </h4>
                    <p className="">
                        {userGrade}
                    </p>
                </div>
            </div>
            <div className="bg-light__gray leading-7 rounded-xl p-4 text-l">
                {children}
            </div>
        </div>
    );
};

export default Cardx;