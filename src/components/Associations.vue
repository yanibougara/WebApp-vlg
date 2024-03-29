<template>
    <div class="app">
        <div>
            <!-- Contenu des associations ici -->

            <div class="bar"></div>
            <!-- Exemple de contenu -->

            <nav>
                <div id="mainNav">
                    <RouterLink to="/">Accueil</RouterLink>
                    <RouterLink to="/search"> Association</RouterLink>
                    <RouterLink to="/searchEvent"> Évènement</RouterLink>
                    <div class="conteneur">
                        <input
                            type="text"
                            name="text"
                            class="input"
                            required=""
                            placeholder="Type to search..."
                        />

                        <div class="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="ionicon"
                                viewBox="0 0 512 512"
                            >
                                <title>Search</title>
                                <path
                                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-miterlimit="10"
                                    stroke-width="32"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    stroke-width="32"
                                    d="M338.29 338.29L448 448"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>

            <h2>Association</h2>
        </div>
        <div class="list-row">
            <button class="point">
                <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.3"
                        cx="14.5"
                        cy="14"
                        r="14"
                        fill="#FFAC6E"
                    />
                    <circle cx="14.5" cy="14" r="5" fill="#FFAC6E" />
                </svg>
                Sport
            </button>
            <button class="point">
                <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.3"
                        cx="14.5"
                        cy="14"
                        r="14"
                        fill="#2300F9"
                    />
                    <circle cx="14.5" cy="14" r="5" fill="#2300F9" />
                </svg>
                Culture
            </button>
            <button class="point">
                <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.3"
                        cx="14.5"
                        cy="14"
                        r="14"
                        fill="#6EFF85"
                    />
                    <circle cx="14.5" cy="14" r="5" fill="#6EFF85" />
                </svg>
                Etude
            </button>
            <button class="point">
                <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.3"
                        cx="14.5"
                        cy="14"
                        r="14"
                        fill="#F36EFF"
                    />
                    <circle cx="14.5" cy="14" r="5" fill="#F36EFF" />
                </svg>
                Aide
            </button>
            <button class="point">
                <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.3"
                        cx="14.0185"
                        cy="14.1162"
                        r="14"
                        transform="rotate(-0.0759247 14.0185 14.1162)"
                        fill="#E1D885"
                    />
                    <circle
                        cx="14.0183"
                        cy="14.1164"
                        r="5"
                        transform="rotate(-0.0759247 14.0183 14.1164)"
                        fill="#E1D885"
                    />
                </svg>

                Aide
            </button>
        </div>
        <div class="list-association">
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association judo
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 2
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 3
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 4
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 5
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 6
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 7
            </button>
            <button class="list-asso">
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.657 14.6572L10.414 18.9002C10.2284 19.0859 10.0081 19.2333 9.76556 19.3338C9.52303 19.4344 9.26305 19.4861 9.0005 19.4861C8.73796 19.4861 8.47798 19.4344 8.23544 19.3338C7.99291 19.2333 7.77256 19.0859 7.587 18.9002L3.343 14.6572C2.22422 13.5384 1.46234 12.1129 1.15369 10.5611C0.845043 9.00922 1.00349 7.40071 1.60901 5.93893C2.21452 4.47714 3.2399 3.22774 4.55548 2.3487C5.87107 1.46967 7.41777 1.00049 9 1.00049C10.5822 1.00049 12.1289 1.46967 13.4445 2.3487C14.7601 3.22774 15.7855 4.47714 16.391 5.93893C16.9965 7.40071 17.155 9.00922 16.8463 10.5611C16.5377 12.1129 15.7758 13.5384 14.657 14.6572Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z"
                        stroke="#FFAC6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Association 8
            </button>
        </div>
    </div>
    <svg
        class="image"
        width="360"
        height="501"
        viewBox="0 0 360 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M57.6515 490.205L47.8809 469.568L46.0061 458.899L49.339 439.699L58.8801 421.871L84.5687 388.215L92.7079 359.859L99.4037 351.277L140.727 331.944L165.547 330.863L200.263 342.878L212.35 344.51L225.224 340.827L235.723 329.856L244.334 301.643L266.248 266.845L269.737 236.58L297.8 193.538L301.677 173.997L301.777 153.314L304.622 144.073L315.895 137.88L328.053 139.032L374.501 155.1L386.517 157.217L413.296 156.222L423.449 154.242L450.558 137.684L489.422 121.653L501.938 120.384L514.168 121.052L525.754 126.072L535.584 139.652L540.462 163.357L554.426 209.004L554.811 219.73L550.064 238.5L550.993 248.885L562.695 273.137L564.025 284.149L550.023 352.154L533.216 399.105L531.786 408.777L534.061 420.074L545.29 444.183L545.106 475.448L549.156 518.097L545.366 527.055L540.144 529.013L516.256 523.809L482.354 502.95L471.094 499.039L457.164 499.877L420.029 510.875L407.656 511.176L372.866 499.644L348.548 497.344L324.704 511.855L307.58 530.927L293.992 539.447L268.745 543.43L208.179 542.798L182.075 552.584L169.844 551.916L147.43 540.087L100.437 524.363L74.1309 508.829L57.6515 490.205"
            stroke="#3D3E43"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M85.775 456.779L85.7597 450.207L96.2458 432.665L129.1 390.566L141.46 383.697L159.34 379.505L171.498 380.654L205.073 400.405L217.088 402.525L248.173 395.759L278.627 399.915L297.364 389.921L299.339 379.908L281.115 343.077L281.613 323.02L291.698 304.853L331.634 264.896L334.553 255.169L329.387 233.399L329.946 222.961L337.125 204.418L344.763 196.119L358.038 193.06L406.345 196.556L418.29 199.156L441.034 212.096L455.725 209.469L468.456 190.08L481.902 182.525L492.988 190.931L502.071 212.874L509.812 267.249L522.371 302.367L518.942 342.249L515.065 361.79L495.025 407.258L483.009 421.813L454.831 445.623L429.227 452.024L369.404 443.026L356.602 446.228L312.301 465.669L301.358 472.969L287.57 489.513L274.738 496.239L240.979 491.084L179.3 494.66L154.523 498.785L142.364 497.636L130.778 492.616L97.1623 469.821L87.8488 459.426L86.9346 455.613"
            stroke="#3D3E43"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M82.8984 486.221L67.7213 465.466L65.446 454.168L67.3487 444.639L77.8347 427.097L100.206 402.541L110.304 374.272L117.87 366.459L151.701 354.459L164.074 354.161L175.803 358.214L208.234 385.701L216.071 386.051L220.535 385.884L247.427 370.777L268.654 370.629L260.814 336.938L262.26 317.167L271.399 298.714L287.075 282.741L298.505 265.487L307.602 227.316L323.364 184.091L331.031 172.263L337.883 169.285L350.113 169.952L373.529 175.011L410.293 176.53L434.181 181.734L447.197 177.083L461.101 163.099L474.618 155.063L487.348 152.345L499.293 154.946L506.933 163.321L526.086 210.538L526.919 241.604L540.796 297.835L541.182 308.561L532.943 357.598L515.266 403.78L511.389 423.322L511.777 434.049L522.061 457.869L524.709 489.993L521.818 496.189L509.374 496.974L486.773 483.066L475.516 479.157L450.912 478.789L413.004 485.008L401.318 484L365.986 472.81L353.541 473.594L327.434 483.379L299.299 510.234L285.925 517.305L273.48 518.089L249.52 513.369L151.805 517.162L127.917 511.958L116.33 506.938L82.4285 486.079"
            stroke="#3D3E43"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M149.314 407.289L168.281 402.415L179.826 404.393L214.872 417.516L251.09 419.375L274.579 423.953L287.024 423.169L331.825 400.343L333.8 390.331L327.274 377.75L315.088 363.456L308.494 351.358L309.465 331.443L316.173 312.761L329.89 296.701L355.31 288.222L365.952 276.286L366.981 265.988L351.904 241.22L349.628 229.923L352.948 220.823L365.707 214.58L377.794 216.212L389.381 221.233L422.353 248.378L434.154 251.947L470.588 252.358L481.102 264.63L487.311 282.673L500.028 306.727L502.677 338.848L486.342 385.943L475.455 402.858L458.177 416.324L444.945 422.427L419.77 425.927L359.133 425.778L294.233 451.113L266.699 470.57L242.353 471.798L216.963 476.75L167.369 481.96L143.167 482.217L131.577 477.198L120.492 468.793L113.468 459.599L112.138 448.587L115.527 439.002L127.829 422.514L149.314 407.289"
            stroke="#3D3E43"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M366.299 383.992L359.876 367.401L354.71 345.631L354.796 335.05L361.49 326.464L391.042 300.039L404.202 294.42L442.065 285.156L454.297 285.824L465.598 292.778L477.355 309.974L482.062 321.501L482.92 332.368L468.948 380.177L463.526 390.158L449.652 400.611L424.402 404.596L388.399 401.285L376.741 396.748L366.299 383.992"
            stroke="#3D3E43"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<style scoped>
.list-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 2%;
    list-style: none;
    gap: 3%;
    width: 80%;
    background-color: #393939;
    border-radius: 50px;
}

.searchbar {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    border-radius: 30px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-asso {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 50px;
    font-size: 100%;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #313131;
}

.list-association {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    font-size: 100%;
    list-style: none;
    gap: 3%;
    width: 50%;
    z-index: 1;
}

.list-asso:hover {
    background: rgb(159, 158, 160);
    transition: 1s ease;
}
.image {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: auto;
}

h2 {
    color: white;
    font-size: 2em;
    margin: 10;
    padding: 0;
}

.point {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: #313131;
}

.bar {
    width: 100%;
    height: 1px;
    background: rgb(124, 124, 124);
    margin: 40px 0;
}

@media screen and (max-width: 768px) {
    .list-row {
        background-color: #313131;
    }
}

nav[data-v-79bc48c9] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 20px;
    width: 100%;
}

#mainNav {
    display: flex;

    border-radius: 20px;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    width: 55%;
    gap: 50px;
}

nav li {
    text-decoration: none;
    margin-right: 20px;
}

nav li:hover {
    color: #f5a623;
}

nav a {
    text-decoration: none;
    color: black;
    font-size: 17px;
    font-family: "Poppins";
    text-align: center;
    padding: 20px;
}
.conteneur {
    position: relative;
    --size-button: 48px;
    color: white;
    width: 0px;
    
}

.input {
    padding-left: var(--size-button);
    height: var(--size-button);
    font-size: 15px;
    border: none;
    color: #fff;
    outline: none;
    width: var(--size-button);
    transition: all ease 0.3s;
    background-color: #191a1e;
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%),
        inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
    border-radius: 50px;
    cursor: pointer;
}

.input:focus,
.input:not(:invalid) {
    width: 200px;
    cursor: text;
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%),
        inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;
}

.input:focus + .icon,
.input:not(:invalid) + .icon {
    pointer-events: all;
    cursor: pointer;
}

.conteneur .icon {
    position: absolute;
    width: var(--size-button);
    height: var(--size-button);
    top: 0;
    left: 0;
    padding: 8px;
    pointer-events: none;
}

.conteneur .icon svg {
    width: 100%;
    height: 100%;
}
</style>

<script>
export default {
    // Composant des associations
};
</script>
