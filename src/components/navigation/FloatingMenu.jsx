/**
 * Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free
 * Copyright 2024 Fonticons, Inc.
 */

import React, { useState, useEffect, useRef } from 'react';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button
                type="button"
                className="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600"
                onClick={toggleMenu}
                ref={buttonRef}
            >
                <span className="sr-only">Navigation</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-gray-700">
                    <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            </button>
            {isOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-12 right-4 max-w-xs bg-white rounded-lg shadow p-6 border text-base leading-6 font-medium text-gray-700"
                    id="headlessui-dialog-panel-:r1a:"
                    data-headlessui-state="open"
                    data-open=""
                >
                    <ul className="space-y-6">
                        <li>
                            <a className="hover:text-purple-h" href="/programs">
                                Programs
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-purple-h">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-purple-h" href="/community">
                                Community
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-purple-h" href="/story">
                                Story
                            </a>
                        </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between gap-4">
                            <label htmlFor="theme" className="text-gray-500 font-normal">
                                아이인위 멤버십
                            </label>
                            <a
                                href="https://forms.gle/4GqkZByad6L2dx247"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1 px-2 rounded-lg transition border border-purple-h text-purple-h hover:bg-purple-200"
                            >
                                가입하기
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingMenu;
