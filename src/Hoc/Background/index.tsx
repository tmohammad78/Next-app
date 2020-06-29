import React, { useState, useEffect } from 'react';
import Router, { useRouter } from "next/router";

const Background = ({ children, active }: any) => {
    return (
        <div className={`image-background ${active ? 'active' : ''}`}>
            <picture>
                <div className='my_img'></div>
            </picture>
            {children}
        </div>
    )
}

export default Background;