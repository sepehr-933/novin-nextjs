import React,{useState} from "react";
import ImageBox from "../ImageBox";
import expand from '../../../public/Assets/png-concepts/ic expand.png';
import Animated from "react-mount-animation";

const Accordion = ({topic, sessions = [],sessionNumbers}) => {
    const [show , setShow] = useState(false)
    return (
        <div className="bg-light__gray rounded-xl p-4 w-full">
            <div
                onClick={() => {setShow(!show)}}
                className="flex my-4"
            >
                <h2 className="font-bold text-2xl ml-auto">
                    {topic}
                </h2>
                <p className="font-bold text-2xl ml-24">
                    {sessionNumbers}
                </p>
                <ImageBox src={expand} alt="arrow" classes={`justify-self-end  ${show ? ' rotate-0' : "rotate-180"}`} />
            </div>
              <Animated.div
                  show={show}
                  mountAnim={`
                     0% {height: 0}
                     100% {height: 14rem}
                  `}
                  time={0.6}
                  className=" px-4 border-t border-light__gray2 pt-8"
              >
                  {
                      sessions.map((session , i) => {
                          return (
                              <Animated.div
                                  show={show}
                                  mountAnim={`
                                    0% {opacity: 0}
                                    100% {opacity : 100%}
                                  `}
                                  time={0.6}
                                  key={i}
                                  className="bg-light__gray2 mb-8 flex items-center rounded-xl py-2 px-4"
                              >
                                  <div className="font-bold flex text-xl ml-auto">
                                      <h2 className="ml-2">
                                          جلسه {i} :
                                      </h2>
                                      <h2>
                                          {session.name}
                                      </h2>
                                  </div>
                                  <p className="font-bold text-xl ml-24">
                                      {session.time}
                                  </p>
                                  <ImageBox src={session.icon} alt="arrow" classes="justify-self-end "/>
                              </Animated.div>
                          );
                      })
                  }
              </Animated.div>
        </div>
    );
};

export default Accordion;