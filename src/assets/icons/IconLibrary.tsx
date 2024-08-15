interface IconProps {
  fill?: string;
  width: number;
  height: number;
  className?: string;
}

// Experimenting new way to organise Icons (might update this to different implementation)
// TODO: Fix static viewBox to dynamic

const AlumniIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M11.1696 4.18827C11.4325 4.06875 11.7343 4.06875 11.9972 4.18827L20.5806 8.08981C21.3622 8.44508 21.3622 9.55527 20.5806 9.91054L11.9972 13.8121C11.7343 13.9316 11.4325 13.9316 11.1696 13.8121L2.5862 9.91054C1.8046 9.55527 1.8046 8.44508 2.5862 8.08981L11.1696 4.18827Z"
      stroke={"currentColor"}
      strokeWidth="2"
    />
    <path
      d="M20.083 15C20.083 15.5523 20.5307 16 21.083 16C21.6353 16 22.083 15.5523 22.083 15H20.083ZM20.083 9.5V15H22.083V9.5H20.083Z"
      fill={"currentColor"}
    />
    <path
      d="M17.583 11.5V18C17.583 19.1046 14.8967 20 11.583 20C8.2693 20 5.58301 19.1046 5.58301 18V11.5"
      stroke={"currentColor"}
      strokeWidth="2"
    />
  </svg>
);

const BankBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="8" fill={"currentColor"} opacity="0.1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.469 15.0676C23.6943 14.9775 23.9457 14.9775 24.171 15.0676L32.046 18.2176C32.4047 18.3611 32.64 18.7086 32.64 19.095V21.4575C32.64 21.9794 32.2169 22.4025 31.695 22.4025H30.8287V26.8125H31.695C32.2169 26.8125 32.64 27.2356 32.64 27.7575V31.695C32.64 32.2169 32.2169 32.64 31.695 32.64H15.945C15.4231 32.64 15 32.2169 15 31.695V27.7575C15 27.2356 15.4231 26.8125 15.945 26.8125H17.1262V22.4025H15.945C15.4231 22.4025 15 21.9794 15 21.4575V19.095C15 18.7086 15.2353 18.3611 15.594 18.2176L23.469 15.0676ZM19.0162 22.4025V26.8125H23.0325L23.0325 22.4025H19.0162ZM24.9225 22.4025L24.9225 26.8125H28.9387L28.9387 22.4025H24.9225ZM30.75 20.5125V19.7348L23.82 16.9628L16.89 19.7348V20.5125H30.75ZM30.75 28.7025H16.89V30.75H30.75V28.7025Z"
      fill={"currentColor"}
    />
  </svg>
);

const BankIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 20 20">
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.92411 1.06759C10.1494 0.97747 10.4007 0.97747 10.626 1.06759L18.501 4.21759C18.8598 4.3611 19.0951 4.70859 19.0951 5.095V7.4575C19.0951 7.97941 18.672 8.4025 18.1501 8.4025H17.2838V12.8125H18.1501C18.672 12.8125 19.0951 13.2356 19.0951 13.7575V17.695C19.0951 18.2169 18.672 18.64 18.1501 18.64H2.40008C1.87817 18.64 1.45508 18.2169 1.45508 17.695V13.7575C1.45508 13.2356 1.87817 12.8125 2.40008 12.8125H3.58133V8.4025H2.40008C1.87817 8.4025 1.45508 7.97941 1.45508 7.4575V5.095C1.45508 4.70859 1.69034 4.3611 2.04911 4.21759L9.92411 1.06759ZM5.47133 8.4025V12.8125H9.48758L9.48758 8.4025H5.47133ZM11.3776 8.4025L11.3776 12.8125H15.3938L15.3938 8.4025H11.3776ZM17.2051 6.5125V5.7348L10.2751 2.9628L3.34508 5.7348V6.5125H17.2051ZM17.2051 14.7025H3.34508V16.75H17.2051V14.7025Z"
    />
  </svg>
);

const BookIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BriefcaseIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.44804 2.28105C6.94814 1.78095 7.62641 1.5 8.33366 1.5H11.667C12.3742 1.5 13.0525 1.78095 13.5526 2.28105C14.0527 2.78115 14.3337 3.45942 14.3337 4.16667V4.83333H16.667C18.1398 4.83333 19.3337 6.02724 19.3337 7.5V15.8333C19.3337 17.3061 18.1398 18.5 16.667 18.5H3.33366C1.8609 18.5 0.666992 17.3061 0.666992 15.8333V7.5C0.666992 6.02724 1.8609 4.83333 3.33366 4.83333H5.66699V4.16667C5.66699 3.45942 5.94794 2.78115 6.44804 2.28105ZM5.66699 6.83333H3.33366C2.96547 6.83333 2.66699 7.13181 2.66699 7.5V15.8333C2.66699 16.2015 2.96547 16.5 3.33366 16.5H5.66699V6.83333ZM7.66699 16.5V6.83333H12.3337V16.5H7.66699ZM14.3337 16.5H16.667C17.0352 16.5 17.3337 16.2015 17.3337 15.8333V7.5C17.3337 7.13181 17.0352 6.83333 16.667 6.83333H14.3337V16.5ZM12.3337 4.83333H7.66699V4.16667C7.66699 3.98986 7.73723 3.82029 7.86225 3.69526C7.98728 3.57024 8.15685 3.5 8.33366 3.5H11.667C11.8438 3.5 12.0134 3.57024 12.1384 3.69526C12.2634 3.82029 12.3337 3.98986 12.3337 4.16667V4.83333Z"
      fill={"currentColor"}
    />
  </svg>
);

const BuildingIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 21V5C14 3.89543 13.1046 3 12 3H5C3.89543 3 3 3.89543 3 5V21"
      stroke={"currentColor"}
      strokeWidth="2"
    />
    <path
      d="M1.5 21.5H22.5"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="18"
      y="10"
      width="4"
      height="7"
      rx="2"
      stroke={"currentColor"}
      strokeWidth="2"
    />
    <path d="M20 17V21.5" stroke={"currentColor"} strokeWidth="2" />
    <path
      d="M6.5 7.5H10.5"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6.5 11H10.5"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8.5 21V17.5"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CarIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} fill="none">
    <rect width="48" height="48" rx="12" fill={"currentColor"} opacity="0.1" />
    <path
      d="M13 24.2344V27C13 27.5523 13.4477 28 14 28H15.5H32H34C34.5523 28 35 27.5523 35 27V24.1057C35 23.7334 34.7932 23.3919 34.4633 23.2194L32.3112 22.0945C32.1919 22.0321 32.0865 21.9464 32.0011 21.8423L29.5609 18.866C29.371 18.6343 29.0872 18.5 28.7876 18.5H21.1254C20.8259 18.5 20.5421 18.6343 20.3521 18.866L17.9719 21.7692C17.8484 21.9198 17.6836 22.031 17.4978 22.0893L13.7007 23.2802C13.2838 23.411 13 23.7974 13 24.2344Z"
      stroke={"currentColor"}
      stroke-width="2"
    />
    <circle
      cx="18.5"
      cy="28.5"
      r="2.75"
      fill={"currentColor"}
      stroke-width="1.5"
    />
    <circle
      cx="29.5"
      cy="28.5"
      r="2.75"
      fill={"currentColor"}
      stroke-width="1.5"
    />
  </svg>
);

const CardBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill={"currentColor"} opacity="0.1" />
    <path
      d="M33 16H15C13.8954 16 13 16.8954 13 18V30C13 31.1046 13.8954 32 15 32H33C34.1046 32 35 31.1046 35 30V18C35 16.8954 34.1046 16 33 16Z"
      fill={"currentColor"}
    />
    <path
      d="M13 22H35"
      stroke="#EDEDED"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const CardIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.95505 4.03333C2.42117 4.03333 1.98838 4.46612 1.98838 5V7.63333H18.9217V5C18.9217 4.46612 18.4889 4.03333 17.955 4.03333H2.95505ZM20.3217 5C20.3217 3.69292 19.2621 2.63333 17.955 2.63333H2.95505C1.64797 2.63333 0.588379 3.69292 0.588379 5V15C0.588379 16.3071 1.64797 17.3667 2.95505 17.3667H17.955C19.2621 17.3667 20.3217 16.3071 20.3217 15V5ZM18.9217 9.03333H1.98838V15C1.98838 15.5339 2.42117 15.9667 2.95505 15.9667H17.955C18.4889 15.9667 18.9217 15.5339 18.9217 15V9.03333Z"
    />
  </svg>
);

const ChevronDownIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 14 8">
    <path
      fill={"currentColor"}
      d="M1 1L7 7L13 1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox={`0 0 10 16`}>
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.15128 1.15147C1.61991 0.682846 2.3797 0.682846 2.84833 1.15147L8.84833 7.15147C9.31696 7.6201 9.31696 8.3799 8.84833 8.84853L2.84833 14.8485C2.3797 15.3172 1.61991 15.3172 1.15128 14.8485C0.682648 14.3799 0.682648 13.6201 1.15128 13.1515L6.30275 8L1.15128 2.84853C0.682647 2.3799 0.682647 1.6201 1.15128 1.15147Z"
    />
  </svg>
);

const CopyIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_1535_36691)">
      <path
        d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
        stroke={"currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33398 10.0002H2.66732C2.3137 10.0002 1.97456 9.85969 1.72451 9.60964C1.47446 9.35959 1.33398 9.02045 1.33398 8.66683V2.66683C1.33398 2.31321 1.47446 1.97407 1.72451 1.72402C1.97456 1.47397 2.3137 1.3335 2.66732 1.3335H8.66732C9.02094 1.3335 9.36008 1.47397 9.61013 1.72402C9.86018 1.97407 10.0007 2.31321 10.0007 2.66683V3.3335"
        stroke={"currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1535_36691">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CrossBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="100" height="100" viewBox="0 0 100 100" fill="none">
    <path
      d="M52 95.3332C75.9324 95.3332 95.3334 75.9322 95.3334 51.9998C95.3334 28.0675 75.9324 8.6665 52 8.6665C28.0677 8.6665 8.66669 28.0675 8.66669 51.9998C8.66669 75.9322 28.0677 95.3332 52 95.3332Z"
      fill={"currentColor"}
      opacity="0.1"
    />
    <path
      d="M65 39L39 65"
      stroke={"currentColor"}
      strokeWidth="5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M39 39L65 65"
      stroke={"currentColor"}
      strokeWidth="5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const DocumentBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="8" fill={"currentColor"} opacity="0.1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3989 16.3992C16.8677 15.9304 17.5036 15.667 18.1666 15.667H20.6666C21.1269 15.667 21.5 16.0401 21.5 16.5003C21.5 16.9606 21.1269 17.3337 20.6666 17.3337H18.1666C17.9456 17.3337 17.7337 17.4215 17.5774 17.5777C17.4211 17.734 17.3333 17.946 17.3333 18.167V20.667C17.3333 21.1272 16.9602 21.5003 16.5 21.5003C16.0397 21.5003 15.6666 21.1272 15.6666 20.667V18.167C15.6666 17.504 15.93 16.8681 16.3989 16.3992ZM26.5 16.5003C26.5 16.0401 26.8731 15.667 27.3333 15.667H29.8333C30.4963 15.667 31.1322 15.9304 31.6011 16.3992C32.0699 16.8681 32.3333 17.504 32.3333 18.167V20.667C32.3333 21.1272 31.9602 21.5003 31.5 21.5003C31.0397 21.5003 30.6666 21.1272 30.6666 20.667V18.167C30.6666 17.946 30.5788 17.734 30.4225 17.5777C30.2663 17.4215 30.0543 17.3337 29.8333 17.3337H27.3333C26.8731 17.3337 26.5 16.9606 26.5 16.5003ZM19 22.3337C19 21.8734 19.3731 21.5003 19.8333 21.5003H28.1666C28.6269 21.5003 29 21.8734 29 22.3337C29 22.7939 28.6269 23.167 28.1666 23.167H19.8333C19.3731 23.167 19 22.7939 19 22.3337ZM19 25.667C19 25.2068 19.3731 24.8337 19.8333 24.8337H24.8333C25.2935 24.8337 25.6666 25.2068 25.6666 25.667C25.6666 26.1272 25.2935 26.5003 24.8333 26.5003H19.8333C19.3731 26.5003 19 26.1272 19 25.667ZM16.5 26.5003C16.9602 26.5003 17.3333 26.8734 17.3333 27.3337V29.8337C17.3333 30.0547 17.4211 30.2666 17.5774 30.4229C17.7337 30.5792 17.9456 30.667 18.1666 30.667H20.6666C21.1269 30.667 21.5 31.0401 21.5 31.5003C21.5 31.9606 21.1269 32.3337 20.6666 32.3337H18.1666C17.5036 32.3337 16.8677 32.0703 16.3989 31.6014C15.93 31.1326 15.6666 30.4967 15.6666 29.8337V27.3337C15.6666 26.8734 16.0397 26.5003 16.5 26.5003ZM31.5 26.5003C31.9602 26.5003 32.3333 26.8734 32.3333 27.3337V29.8337C32.3333 30.4967 32.0699 31.1326 31.6011 31.6014C31.1322 32.0703 30.4963 32.3337 29.8333 32.3337H27.3333C26.8731 32.3337 26.5 31.9606 26.5 31.5003C26.5 31.0401 26.8731 30.667 27.3333 30.667H29.8333C30.0543 30.667 30.2663 30.5792 30.4225 30.4229C30.5788 30.2666 30.6666 30.0547 30.6666 29.8337V27.3337C30.6666 26.8734 31.0397 26.5003 31.5 26.5003Z"
      fill={"currentColor"}
    />
  </svg>
);

const DocumentIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 13H8"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17H8"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9H9H8"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EditIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 20 20">
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8334 2.80963C15.6552 2.80963 15.4788 2.84473 15.3141 2.91293C15.1495 2.98113 14.9999 3.08108 14.8739 3.20709L3.81166 14.2693L3.09199 16.9081L5.73078 16.1884L16.793 5.12621C16.919 5.0002 17.019 4.8506 17.0872 4.68596C17.1554 4.52132 17.1905 4.34486 17.1905 4.16665C17.1905 3.98844 17.1554 3.81198 17.0872 3.64734C17.019 3.4827 16.919 3.33311 16.793 3.20709C16.667 3.08108 16.5174 2.98113 16.3527 2.91293C16.1881 2.84473 16.0116 2.80963 15.8334 2.80963ZM14.5488 1.06517C14.9561 0.896463 15.3926 0.809631 15.8334 0.809631C16.2743 0.809631 16.7108 0.896463 17.1181 1.06517C17.5254 1.23388 17.8955 1.48115 18.2072 1.79288C18.5189 2.10461 18.7662 2.47468 18.9349 2.88198C19.1036 3.28927 19.1905 3.72581 19.1905 4.16665C19.1905 4.6075 19.1036 5.04403 18.9349 5.45133C18.7662 5.85862 18.5189 6.2287 18.2072 6.54043L6.95721 17.7904C6.83416 17.9135 6.68112 18.0023 6.51322 18.0481L1.92989 19.2981C1.58368 19.3925 1.21341 19.2942 0.959664 19.0404C0.705914 18.7867 0.607586 18.4164 0.702007 18.0702L1.95201 13.4869C1.9978 13.319 2.08661 13.1659 2.20966 13.0429L13.4597 1.79288C13.7714 1.48115 14.1415 1.23388 14.5488 1.06517Z"
    />
  </svg>
);

const InfoIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 20 20">
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0001 2.66666C5.94999 2.66666 2.66675 5.9499 2.66675 9.99999C2.66675 14.0501 5.94999 17.3333 10.0001 17.3333C14.0502 17.3333 17.3334 14.0501 17.3334 9.99999C17.3334 5.9499 14.0502 2.66666 10.0001 2.66666ZM0.666748 9.99999C0.666748 4.84533 4.84542 0.666656 10.0001 0.666656C15.1547 0.666656 19.3334 4.84533 19.3334 9.99999C19.3334 15.1546 15.1547 19.3333 10.0001 19.3333C4.84542 19.3333 0.666748 15.1546 0.666748 9.99999ZM9.00008 6.66666C9.00008 6.11437 9.4478 5.66666 10.0001 5.66666H10.0084C10.5607 5.66666 11.0084 6.11437 11.0084 6.66666C11.0084 7.21894 10.5607 7.66666 10.0084 7.66666H10.0001C9.4478 7.66666 9.00008 7.21894 9.00008 6.66666ZM10.0001 8.99999C10.5524 8.99999 11.0001 9.4477 11.0001 9.99999V13.3333C11.0001 13.8856 10.5524 14.3333 10.0001 14.3333C9.4478 14.3333 9.00008 13.8856 9.00008 13.3333V9.99999C9.00008 9.4477 9.4478 8.99999 10.0001 8.99999Z"
    />
  </svg>
);
const LeafBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill={"currentColor"} opacity="0.1" />
    <path
      d="M22.4853 19.2422C24.8284 21.5853 24.6066 25.6061 24.6066 25.6061C24.6066 25.6061 20.5858 25.828 18.2426 23.4848C15.8995 21.1417 16.1213 17.1209 16.1213 17.1209C16.1213 17.1209 20.1421 16.899 22.4853 19.2422Z"
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeWidth="2"
    />
    <path
      d="M30.1406 22.7779C28.5785 24.34 25.898 24.1922 25.898 24.1922C25.898 24.1922 25.7501 21.5116 27.3122 19.9495C28.8743 18.3874 31.5548 18.5353 31.5548 18.5353C31.5548 18.5353 31.7027 21.2159 30.1406 22.7779Z"
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeWidth="2"
    />
    <path
      d="M24 32.3633L24 33.3633L26 33.3633L26 32.3633L24 32.3633ZM24 22.3633L24 32.3633L26 32.3633L26 22.3633L24 22.3633Z"
      fill={"currentColor"}
    />
  </svg>
);

const LogoutIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 18 18">
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75001 3.1501C3.59088 3.1501 3.43826 3.21331 3.32574 3.32583C3.21322 3.43835 3.15001 3.59097 3.15001 3.7501V14.2501C3.15001 14.4092 3.21322 14.5618 3.32574 14.6744C3.43826 14.7869 3.59088 14.8501 3.75001 14.8501H6.75001C7.24706 14.8501 7.65001 15.253 7.65001 15.7501C7.65001 16.2472 7.24706 16.6501 6.75001 16.6501H3.75001C3.11349 16.6501 2.50304 16.3972 2.05295 15.9472C1.60286 15.4971 1.35001 14.8866 1.35001 14.2501V3.7501C1.35001 3.11358 1.60286 2.50313 2.05295 2.05304C2.50304 1.60295 3.11349 1.3501 3.75001 1.3501H6.75001C7.24706 1.3501 7.65001 1.75304 7.65001 2.2501C7.65001 2.74715 7.24706 3.1501 6.75001 3.1501H3.75001ZM11.3636 4.6137C11.7151 4.26223 12.2849 4.26223 12.6364 4.6137L16.3864 8.3637C16.5552 8.53248 16.65 8.7614 16.65 9.0001C16.65 9.23879 16.5552 9.46771 16.3864 9.63649L12.6364 13.3865C12.2849 13.738 11.7151 13.738 11.3636 13.3865C11.0121 13.035 11.0121 12.4652 11.3636 12.1137L13.5772 9.9001H6.75001C6.25295 9.9001 5.85001 9.49715 5.85001 9.0001C5.85001 8.50304 6.25295 8.1001 6.75001 8.1001L13.5772 8.1001L11.3636 5.88649C11.0121 5.53502 11.0121 4.96517 11.3636 4.6137Z"
    />
  </svg>
);

const MailIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V18"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6V22"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RadioButtonCheckedIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4004 9.90039L10.5879 14.9004L8.40039 12.6277"
      stroke={"#8F8F8F"}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const RadioButtonIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20101 16.799 0.5 11 0.5C5.20101 0.5 0.5 5.20101 0.5 11C0.5 16.799 5.20101 21.5 11 21.5Z"
      stroke={"currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RadioButtonOutlinedIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75Z"
      fill={"currentColor"}
      fillOpacity="0.05"
      stroke={"currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 16 18">
    {/* TODO: Figure out how to standardise and handle stroke here */}
    <path
      fill="white"
      stroke={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.625 6.3791L7.125 9.96517L5.375 8.17213M15 7.42354C15 13.3121 10.6529 15.9522 8.81008 16.8068L8.80771 16.8078C8.6139 16.8978 8.51677 16.9428 8.29654 16.9816C8.15706 17.0061 7.84381 17.0061 7.70434 16.9816C7.48322 16.9427 7.38505 16.8975 7.18975 16.8068C5.34683 15.9522 1 13.3121 1 7.42354V3.86903C1 2.86484 1 2.36237 1.19074 1.97882C1.35851 1.64143 1.62604 1.36733 1.95533 1.19543C2.32967 1 2.82008 1 3.80018 1H12.2002C13.1803 1 13.6697 1 14.044 1.19543C14.3732 1.36733 14.6417 1.64143 14.8094 1.97882C15 2.36199 15 2.86385 15 3.86608V7.42354Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StudentBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} fill="none">
    <rect width="48" height="48" rx="8" fill={"currentColor"} opacity="0.1" />
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M22.9633 16.7317C23.4015 16.5325 23.9045 16.5325 24.3427 16.7317L31.4955 19.9829C32.3205 20.358 32.623 21.2377 32.403 21.9829V26.5001C32.403 26.9603 32.0299 27.3334 31.5696 27.3334C31.1094 27.3334 30.7363 26.9603 30.7363 26.5001V23.3626L29.4863 23.9308V29.0001C29.4863 29.595 29.1239 30.0291 28.7759 30.3033C28.4185 30.585 27.953 30.8022 27.452 30.9692C26.4414 31.306 25.0983 31.5001 23.653 31.5001C22.2076 31.5001 20.8645 31.306 19.8539 30.9692C19.353 30.8022 18.8875 30.585 18.5301 30.3033C18.1821 30.0291 17.8196 29.595 17.8196 29.0001V23.9308L15.8105 23.0175C14.5078 22.4254 14.5078 20.5751 15.8105 19.9829L22.9633 16.7317ZM19.4863 24.6883V28.927C19.5011 28.9428 19.5249 28.9653 19.5617 28.9943C19.7104 29.1115 19.9771 29.2534 20.381 29.388C21.18 29.6544 22.3369 29.8334 23.653 29.8334C24.969 29.8334 26.1259 29.6544 26.925 29.388C27.3289 29.2534 27.5956 29.1115 27.7442 28.9943C27.7811 28.9653 27.8049 28.9428 27.8196 28.927V24.6883L24.3427 26.2688C23.9045 26.468 23.4015 26.468 22.9633 26.2688L19.4863 24.6883ZM27.8412 28.9C27.8414 28.9 27.8404 28.9019 27.8378 28.9055C27.8397 28.9018 27.841 28.9 27.8412 28.9ZM19.4647 28.9C19.4649 28.9 19.4662 28.9018 19.4681 28.9055C19.4655 28.9019 19.4646 28.9 19.4647 28.9ZM23.653 18.2489L16.5002 21.5002L23.653 24.7515L30.8058 21.5002L23.653 18.2489Z"
      fill={"currentColor"}
    />
  </svg>
);

const StudentIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.96307 0.731584C9.40128 0.532399 9.90421 0.532399 10.3424 0.731584L17.4952 3.98287C18.3203 4.35789 18.6228 5.23764 18.4027 5.98277V10.5C18.4027 10.9602 18.0296 11.3333 17.5694 11.3333C17.1092 11.3333 16.7361 10.9602 16.7361 10.5V7.3625L15.4861 7.93069V13C15.4861 13.5949 15.1236 14.029 14.7756 14.3033C14.4182 14.5849 13.9527 14.8021 13.4518 14.9691C12.4412 15.3059 11.0981 15.5 9.65273 15.5C8.20738 15.5 6.86426 15.3059 5.85367 14.9691C5.35273 14.8021 4.88723 14.5849 4.52984 14.3033C4.18185 14.029 3.8194 13.5949 3.8194 13V7.93067L1.81025 7.01742C0.50759 6.42531 0.507584 4.57499 1.81025 3.98287L8.96307 0.731584ZM5.48606 8.68825V12.9269C5.50084 12.9427 5.52461 12.9652 5.56147 12.9942C5.71011 13.1114 5.97684 13.2533 6.38072 13.3879C7.17977 13.6543 8.33666 13.8333 9.65273 13.8333C10.9688 13.8333 12.1257 13.6543 12.9247 13.3879C13.3286 13.2533 13.5954 13.1114 13.744 12.9942C13.7809 12.9652 13.8046 12.9427 13.8194 12.9269V8.68826L10.3424 10.2687C9.90421 10.4679 9.40128 10.4679 8.96307 10.2687L5.48606 8.68825ZM13.841 12.8999C13.8412 12.8999 13.8402 12.9018 13.8376 12.9055C13.8395 12.9017 13.8408 12.8999 13.841 12.8999ZM5.46449 12.8999C5.46468 12.8999 5.46599 12.9017 5.46789 12.9055C5.46526 12.9018 5.46431 12.8999 5.46449 12.8999ZM9.65274 2.24886L2.49992 5.50015L9.65274 8.75143L16.8056 5.50015L9.65274 2.24886Z"
    />
  </svg>
);

const TrashIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M2.5 5H4.16667H17.5"
      stroke={"currentColor"}
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M15.8327 5.00033V16.667C15.8327 17.109 15.6571 17.5329 15.3445 17.8455C15.032 18.1581 14.608 18.3337 14.166 18.3337H5.83268C5.39065 18.3337 4.96673 18.1581 4.65417 17.8455C4.34161 17.5329 4.16602 17.109 4.16602 16.667V5.00033M6.66602 5.00033V3.33366C6.66602 2.89163 6.84161 2.46771 7.15417 2.15515C7.46673 1.84259 7.89065 1.66699 8.33268 1.66699H11.666C12.108 1.66699 12.532 1.84259 12.8445 2.15515C13.1571 2.46771 13.3327 2.89163 13.3327 3.33366V5.00033"
      stroke={"currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33398 9.16699V14.167"
      stroke={"currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.666 9.16699V14.167"
      stroke={"currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserBgFilledIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="8" fill={"currentColor"} opacity="0.1" />
    <path
      d="M32 33V31C32 29.9391 31.5786 28.9217 30.8284 28.1716C30.0783 27.4214 29.0609 27 28 27H20C18.9391 27 17.9217 27.4214 17.1716 28.1716C16.4214 28.9217 16 29.9391 16 31V33"
      fill={"currentColor"}
    />
    <path
      d="M24 23C26.2091 23 28 21.2091 28 19C28 16.7909 26.2091 15 24 15C21.7909 15 20 16.7909 20 19C20 21.2091 21.7909 23 24 23Z"
      fill={"currentColor"}
    />
  </svg>
);

const UserGroupIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox={`0 0 24 24`}>
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.50016 3.5C7.2115 3.5 6.16683 4.54467 6.16683 5.83333C6.16683 7.122 7.2115 8.16667 8.50016 8.16667C9.78883 8.16667 10.8335 7.122 10.8335 5.83333C10.8335 4.54467 9.78883 3.5 8.50016 3.5ZM4.16683 5.83333C4.16683 3.4401 6.10693 1.5 8.50016 1.5C10.8934 1.5 12.8335 3.4401 12.8335 5.83333C12.8335 8.22657 10.8934 10.1667 8.50016 10.1667C6.10693 10.1667 4.16683 8.22657 4.16683 5.83333ZM13.3647 2.36029C13.5017 1.82527 14.0465 1.5026 14.5815 1.63958C15.5137 1.87824 16.3398 2.42034 16.9298 3.18042C17.5198 3.9405 17.84 4.87531 17.84 5.8375C17.84 6.79968 17.5198 7.7345 16.9298 8.49458C16.3398 9.25466 15.5137 9.79676 14.5815 10.0354C14.0465 10.1724 13.5017 9.84973 13.3647 9.31471C13.2278 8.77968 13.5504 8.2349 14.0855 8.09792C14.5874 7.96941 15.0322 7.67751 15.3499 7.26824C15.6676 6.85896 15.84 6.3556 15.84 5.8375C15.84 5.3194 15.6676 4.81604 15.3499 4.40676C15.0322 3.99749 14.5874 3.70559 14.0855 3.57708C13.5504 3.4401 13.2278 2.89532 13.3647 2.36029ZM2.1027 12.7692C2.91536 11.9565 4.01756 11.5 5.16683 11.5H11.8335C12.9828 11.5 14.085 11.9565 14.8976 12.7692C15.7103 13.5819 16.1668 14.6841 16.1668 15.8333V17.5C16.1668 18.0523 15.7191 18.5 15.1668 18.5C14.6145 18.5 14.1668 18.0523 14.1668 17.5V15.8333C14.1668 15.2145 13.921 14.621 13.4834 14.1834C13.0458 13.7458 12.4523 13.5 11.8335 13.5H5.16683C4.54799 13.5 3.9545 13.7458 3.51691 14.1834C3.07933 14.621 2.8335 15.2145 2.8335 15.8333V17.5C2.8335 18.0523 2.38578 18.5 1.8335 18.5C1.28121 18.5 0.833496 18.0523 0.833496 17.5V15.8333C0.833496 14.6841 1.29004 13.5819 2.1027 12.7692ZM16.6986 12.3583C16.8367 11.8236 17.3821 11.502 17.9168 11.6401C18.8465 11.8801 19.6701 12.4221 20.2583 13.1809C20.8465 13.9398 21.1661 14.8725 21.1668 15.8326V17.5C21.1668 18.0523 20.7191 18.5 20.1668 18.5C19.6145 18.5 19.1668 18.0523 19.1668 17.5V15.8341C19.1664 15.3171 18.9944 14.8149 18.6776 14.4063C18.3609 13.9977 17.9174 13.7058 17.4168 13.5766C16.8821 13.4385 16.5605 12.8931 16.6986 12.3583Z"
    />
  </svg>
);

const UserIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} viewBox={`0 0 24 24`}>
    <path
      fill={"currentColor"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.96647 2C6.67781 2 5.63314 3.04467 5.63314 4.33333C5.63314 5.622 6.67781 6.66667 7.96647 6.66667C9.25514 6.66667 10.2998 5.622 10.2998 4.33333C10.2998 3.04467 9.25514 2 7.96647 2ZM3.63314 4.33333C3.63314 1.9401 5.57324 0 7.96647 0C10.3597 0 12.2998 1.9401 12.2998 4.33333C12.2998 6.72657 10.3597 8.66667 7.96647 8.66667C5.57324 8.66667 3.63314 6.72657 3.63314 4.33333ZM1.56901 11.2692C2.38167 10.4565 3.48387 10 4.63314 10H11.2998C12.4491 10 13.5513 10.4565 14.3639 11.2692C15.1766 12.0819 15.6331 13.1841 15.6331 14.3333V16C15.6331 16.5523 15.1854 17 14.6331 17C14.0809 17 13.6331 16.5523 13.6331 16V14.3333C13.6331 13.7145 13.3873 13.121 12.9497 12.6834C12.5121 12.2458 11.9186 12 11.2998 12H4.63314C4.0143 12 3.42081 12.2458 2.98322 12.6834C2.54564 13.121 2.2998 13.7145 2.2998 14.3333V16C2.2998 16.5523 1.85209 17 1.2998 17C0.74752 17 0.299805 16.5523 0.299805 16V14.3333C0.299805 13.1841 0.756351 12.0819 1.56901 11.2692Z"
    />
  </svg>
);

const UserPlusIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8V14"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 11H17"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VerticalKebabIcon = ({ fill, ...props }: IconProps) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
      stroke={"currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  AlumniIcon,
  BankBgFilledIcon,
  BankIcon,
  BookIcon,
  BriefcaseIcon,
  BuildingIcon,
  CarIcon,
  CardBgFilledIcon,
  CardIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  CrossBgFilledIcon,
  DocumentBgFilledIcon,
  DocumentIcon,
  EditIcon,
  InfoIcon,
  LeafBgFilledIcon,
  LogoutIcon,
  MailIcon,
  MapIcon,
  RadioButtonCheckedIcon,
  RadioButtonIcon,
  RadioButtonOutlinedIcon,
  ShieldIcon,
  StudentBgFilledIcon,
  StudentIcon,
  TrashIcon,
  UserBgFilledIcon,
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  VerticalKebabIcon,
};
