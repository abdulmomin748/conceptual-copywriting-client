import React from 'react';
import mssgIcon from '../../../assets/message.png';
const LetsTalk = () => {
    return (
        <div>
            <div className="grid max-w-7xl grid-cols-1 gap-8 mx-auto rounded-lg md:grid-cols-2">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold leading-tight lg:text-5xl">LET’S START A CONVERSATION!</h2>
                        <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src={mssgIcon} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default LetsTalk;