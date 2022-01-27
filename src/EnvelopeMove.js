import React from "react";
import "./Animation.css";

function EnvelopeMove(props) {
  return (
    <div>
      <svg width="100%" height="100%" viewBox="0 0 157 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="envelope">
          <g id="open">
            <path id="Vector 92" d="M76.5 5C62 5 20.6273 30.3782 5 58C5.00013 161 150 163 150 58C133.5 30 89.5 5 76.5 5Z" fill="#3D405B" stroke="#81B29A" strokeWidth="10" strokeLinecap="round" />
            <path id="Rectangle 87" d="M151.089 74.5334V124C151.089 132.284 144.373 139 136.089 139H20C11.7157 139 5 132.284 5 124L5 75.0353C5 63.2616 17.9438 56.0777 27.9351 62.306L63.915 84.7351C71.9185 89.7243 82.0486 89.7848 90.1111 84.8916L128.307 61.7103C138.303 55.6434 151.089 62.84 151.089 74.5334Z" fill="#3D405B" stroke="#81B29A" strokeWidth="10" />
            <path id="Vector 93" d="M10 132C10 132 59.5338 90.208 77.9502 90.0008C96.3666 89.7936 146 132 146 132" stroke="#81B29A" strokeWidth="10" strokeLinecap="round" />
            <path id="Vector 94" d="M8.5 56H141.5" stroke="#81B29A" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g id="close">
            <rect id="Rectangle 86" x="5" y="44" width="146.089" height="95" rx="15" fill="#3D405B" stroke="#81B29A" strokeWidth="10" />
            <path id="Vector 79" d="M9 52.8169C9 52.8169 58.3517 96.3542 76.7004 96.5701C95.0491 96.7859 144.5 52.8169 144.5 52.8169" stroke="#81B29A" strokeWidth="10" strokeLinecap="round" />
            <path id="Vector 80" d="M57 91.9653L9 131.114" stroke="#81B29A" strokeWidth="10" strokeLinecap="round" />
            <path id="Vector 81" d="M97 91.9653L145 131.114" stroke="#81B29A" strokeWidth="10" strokeLinecap="round" />
          </g>
        </g>
      </svg>

    </div>
  )
}

export default EnvelopeMove;