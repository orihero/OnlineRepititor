import React from 'react';
import {
  Path,
  Svg,
  SvgProps,
  G,
  Rect,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Image,
  Circle,
} from 'react-native-svg';

export function LogoutIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-log-out"
      {...props}>
      <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <Path d="M16 17L21 12 16 7" />
      <Path d="M21 12L9 12" />
    </Svg>
  );
}

export function LogoIcon(props: SvgProps) {
  return (
    <Svg width={134} height={106} viewBox="0 0 134 106" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.995 50.172L126.13.072l3.845 4.518-63.07 53.432-60.3-53.476 3.947-4.43 56.443 50.056z"
        fill="#0600ac"
      />
      <Path
        d="M27.418 22.75C15.022 26.235 5.94 37.602 5.94 51.078c0 16.252 13.205 29.427 29.495 29.427a29.394 29.394 0 0017.339-5.619l.004-.003 9.136-6.69-.007-.004 5.017-3.678.009.007.008-.007 5.019 3.674-.008.008 9.14 6.693a29.394 29.394 0 0017.338 5.62c16.29 0 29.495-13.176 29.495-29.428 0-13.476-9.082-24.843-21.478-28.328l1.611-5.704c14.889 4.185 25.807 17.833 25.807 34.032 0 19.525-15.865 35.353-35.435 35.353a35.342 35.342 0 01-20.84-6.757l-.009-.007-10.648-7.798-10.65 7.798-.008.007a35.342 35.342 0 01-20.84 6.757C15.865 86.431 0 70.603 0 51.078c0-16.2 10.918-29.847 25.807-34.032l1.61 5.704z"
        fill="#0600ac"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104.805 46.709c0-6.333-4.595-11.6-10.64-12.655l1.024-5.838c8.838 1.543 15.556 9.232 15.556 18.493 0 10.368-8.425 18.773-18.817 18.773-10.393 0-18.817-8.405-18.817-18.773h5.94c0 7.095 5.765 12.847 12.877 12.847 7.112 0 12.877-5.752 12.877-12.847zM41.591 33.861c-7.112 0-12.877 5.752-12.877 12.848 0 7.095 5.765 12.847 12.877 12.847 7.112 0 12.877-5.752 12.877-12.847h5.94c0 10.368-8.425 18.773-18.817 18.773-10.393 0-18.817-8.405-18.817-18.773 0-10.369 8.424-18.774 18.817-18.774v5.926zM81.765 79.451l-14.868 25.96-14.8-25.965 5.163-2.93 9.65 16.928 9.698-16.933 5.157 2.94z"
        fill="#0600ac"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.07 7.395c-1.908-.262-4.362.396-8.744 3.358l-3.332-4.907C19.658 2.694 23.697.95 27.881 1.525c4.06.557 7.515 3.228 11.22 6.634 5.163 4.748 10.927 10.65 16.003 15.847 2.291 2.346 4.443 4.549 6.335 6.437 3.025 3.017 5.371 5.376 6.739 8.77 1.342 3.33 1.646 7.395 1.646 13.633h-5.94c0-6.282-.353-9.277-1.218-11.423-.84-2.084-2.25-3.62-5.427-6.79-2.002-1.998-4.22-4.269-6.55-6.655-5.022-5.142-10.568-10.822-15.614-15.461-3.737-3.436-5.973-4.842-8.005-5.122z"
        fill="#0600ac"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.415 26.852c-1.923 1.597-3.788 3.146-5.599 4.952-4.419 4.41-6.424 6.596-7.528 9.096-1.087 2.46-1.409 5.49-1.409 11.936h-5.94c0-6.364.26-10.583 1.913-14.327 1.637-3.705 4.536-6.677 8.764-10.895 2.016-2.011 4.098-3.74 6.004-5.321l.739-.614c2.142-1.785 4.022-3.41 5.626-5.26C90.04 12.89 92.29 8.322 92.29 0h5.94c0 9.645-2.699 15.617-6.752 20.295-1.951 2.252-4.167 4.146-6.312 5.933l-.75.624z"
        fill="#0600ac"
      />
    </Svg>
  );
}

export function RusIcon(props: SvgProps) {
  return (
    <Svg width={31} height={31} viewBox="0 0 31 31" fill="none">
      <Path fill="#1E1E1E" d="M0 0H31V31H0z" />
      <G clipPath="url(#clip0_0_1)">
        <Path
          transform="translate(-35 -467)"
          fill="#F4F4F4"
          d="M0 0H375V820H0z"
        />
        <Rect x={-15} y={-15} width={335} height={61} rx={10} fill="#fff" />
        <Rect width={31} height={31} rx={15.5} fill="url(#pattern0)" />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#image0_0_1"
            transform="matrix(.0046 0 0 .00447 -.297 -.028)"
          />
        </Pattern>
        <ClipPath id="clip0_0_1">
          <Path
            fill="#fff"
            transform="translate(-35 -467)"
            d="M0 0H375V820H0z"
          />
        </ClipPath>
        <Image
          id="image0_0_1"
          width={347}
          height={230}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export function ArrowIcon() {
  return (
    <Svg width={13} height={24} viewBox="0 0 13 24" fill="none">
      <Path
        d="M12 23L1 12 12 1"
        stroke="#C8C8C8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MailIcon() {
  return (
    <Svg width={30} height={29} viewBox="0 0 30 29" fill="none">
      <Path
        d="M3.656 6.25l8.518 6.195a4.792 4.792 0 005.652 0l8.518-6.194M1.568 19.227a19.954 19.954 0 010-9.454c.991-4.063 4.157-7.205 8.172-8.11l.669-.151a20.86 20.86 0 019.182 0l.67.15c4.014.906 7.18 4.048 8.171 8.111.757 3.104.757 6.35 0 9.454-.991 4.063-4.157 7.205-8.172 8.11l-.669.151a20.86 20.86 0 01-9.182 0l-.67-.15c-4.014-.906-7.18-4.048-8.171-8.111z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function BurgerIcon() {
  return (
    <Svg width={29} height={26} viewBox="0 0 29 26" fill="none">
      <Path
        d="M0 0h29v3.25H0V0zm0 11.375h19.333v3.25H0v-3.25zM0 22.75h29V26H0v-3.25z"
        fill="#fff"
      />
    </Svg>
  );
}

export function LogoWhiteIcon() {
  return (
    <Svg width={59} height={47} viewBox="0 0 59 47" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.497 22.09L55.533.032l1.693 1.989-27.768 23.525L2.908 2.001 4.646.051l24.85 22.04z"
        fill="#fff"
      />
      <Path
        d="M12.072 10.017c-5.458 1.534-9.457 6.539-9.457 12.472 0 7.155 5.814 12.956 12.986 12.956 2.856 0 5.492-.917 7.635-2.474l.002-.001 4.021-2.945-.002-.002 2.208-1.62.004.003.004-.003 2.21 1.618-.004.003 4.024 2.947a12.941 12.941 0 007.634 2.474c7.172 0 12.986-5.8 12.986-12.956 0-5.933-3.998-10.938-9.456-12.472l.71-2.512c6.555 1.843 11.362 7.852 11.362 14.984 0 8.596-6.985 15.565-15.602 15.565a15.56 15.56 0 01-9.175-2.975l-.004-.003-4.689-3.433-4.688 3.433-.004.003a15.56 15.56 0 01-9.176 2.975C6.986 38.054 0 31.085 0 22.49 0 15.356 4.807 9.348 11.363 7.505l.709 2.512z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.144 20.565a5.662 5.662 0 00-4.684-5.572l.45-2.57c3.892.68 6.85 4.065 6.85 8.142 0 4.565-3.71 8.266-8.286 8.266-4.575 0-8.285-3.7-8.285-8.266h2.616c0 3.124 2.538 5.657 5.67 5.657 3.13 0 5.669-2.533 5.669-5.657zM18.312 14.908c-3.131 0-5.67 2.533-5.67 5.657s2.539 5.657 5.67 5.657 5.67-2.533 5.67-5.657h2.615c0 4.565-3.71 8.266-8.285 8.266-4.576 0-8.285-3.7-8.285-8.266 0-4.565 3.71-8.266 8.285-8.266v2.61zM36 34.981l-6.546 11.43-6.517-11.432 2.274-1.29 4.248 7.453 4.27-7.455L36 34.98z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.919 3.256c-.84-.115-1.921.174-3.85 1.478l-1.467-2.16C8.655 1.186 10.433.418 12.275.671c1.788.246 3.31 1.422 4.94 2.921 2.274 2.09 4.811 4.689 7.047 6.977a323.329 323.329 0 002.789 2.834c1.331 1.329 2.365 2.367 2.966 3.862.591 1.466.725 3.256.725 6.002h-2.615c0-2.765-.155-4.084-.536-5.03-.37-.917-.99-1.593-2.39-2.988-.881-.88-1.858-1.88-2.884-2.93-2.21-2.265-4.652-4.765-6.874-6.808-1.645-1.513-2.63-2.132-3.524-2.255z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.167 11.822c-.847.704-1.668 1.386-2.465 2.18-1.946 1.942-2.829 2.905-3.315 4.005-.479 1.084-.62 2.418-.62 5.256h-2.615c0-2.802.113-4.66.842-6.308.72-1.631 1.997-2.94 3.858-4.797.888-.885 1.805-1.646 2.644-2.343.11-.09.218-.181.325-.27.943-.786 1.77-1.501 2.477-2.316C39.644 5.676 40.634 3.664 40.634 0h2.615c0 4.247-1.188 6.876-2.973 8.935-.859.992-1.834 1.826-2.779 2.613l-.33.274z"
        fill="#fff"
      />
    </Svg>
  );
}

export function AlertIcon() {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 8L12 12" />
      <Path d="M12 16L12.01 16" />
    </Svg>
  );
}

export function NotificationIcon() {
  return (
    <Svg width={27} height={32} viewBox="0 0 27 32" fill="none">
      <Path
        d="M4.343 10.762l1.449.387-1.45-.387zm6.333-6.736L10.208 2.6l.468 1.425zm-6.402 6.993l-1.45-.387 1.45.387zm-.297 6.33l1.48-.25-1.48.25zm.035.205l-1.48.25 1.48-.25zm.729 6.935l.304-1.469-.304 1.469zm.564.116l.303-1.468-.303 1.468zm16.39 0l-.303-1.468.303 1.468zm.564-.116l.304 1.469-.304-1.47zm.736-6.974l1.479.25-1.48-.25zm.036-.217l-1.479-.25 1.48.25zm-.267-6.235l-1.452.376 1.452-.376zm-.096-.37l1.453-.376-1.453.376zm-6.152-6.658l.477-1.422-.477 1.422zm6.725 13.988l-.74 1.305.74-1.305zm-19.45-.018l-.726-1.312.726 1.312zM15 2a1.5 1.5 0 00-3 0h3zm-3 1.563a1.5 1.5 0 003 0h-3zm-3.086 21.62l.17-1.49-1.795-.205.129 1.802 1.496-.107zm9.172 0l1.496.107.13-1.802-1.796.205.17 1.49zm-.14.893l1.459.353-1.458-.353zm-.125.518l-1.458-.353 1.458.353zm-3.242 3.277l.354 1.457-.354-1.457zm-2.158 0l-.354 1.457.354-1.457zm-3.242-3.277l-1.458.354 1.458-.354zm-.126-.518l1.458-.354-1.458.354zM5.792 11.149c.72-2.697 2.758-4.845 5.353-5.698l-.937-2.85c-3.564 1.172-6.335 4.105-7.315 7.774l2.899.774zm-.069.257l.069-.257-2.899-.774-.068.257 2.898.774zM5.456 17.1a13.42 13.42 0 01.267-5.694l-2.898-.774a16.42 16.42 0 00-.327 6.967l2.958-.5zm.035.204l-.035-.204-2.958.499.035.204 2.958-.499zM3.5 21.072c0-.767.418-1.422 1.017-1.754l-1.452-2.625A4.996 4.996 0 00.5 21.072h3zm1.545 1.948c-.88-.182-1.545-.982-1.545-1.948h-3c0 2.35 1.627 4.408 3.937 4.886l.608-2.938zm.563.117l-.563-.117-.608 2.938.564.116.607-2.938zm15.784 0a38.977 38.977 0 01-15.784 0l-.607 2.937a41.976 41.976 0 0016.998 0l-.607-2.938zm.563-.117l-.563.117.607 2.937.564-.116-.608-2.938zm1.545-1.948c0 .966-.665 1.766-1.545 1.948l.608 2.938c2.31-.478 3.937-2.536 3.937-4.886h-3zm-1-1.744c.59.335 1 .985 1 1.744h3a4.997 4.997 0 00-2.518-4.353L22.5 19.328zm-.948-2.28l-.036.217 2.958.5.037-.218-2.959-.499zm-.24-5.61c.473 1.831.555 3.744.24 5.61l2.959.5c.384-2.282.284-4.621-.295-6.86l-2.904.75zm-.096-.37l.096.37 2.904-.75-.096-.37-2.904.75zm-5.176-5.61c2.534.849 4.489 2.954 5.176 5.61l2.904-.75c-.936-3.62-3.612-6.527-7.127-7.705l-.953 2.845zm-4.895-.007a7.79 7.79 0 014.895.007l.953-2.845a10.79 10.79 0 00-6.785-.012l.937 2.85zm12.837 11.268c.343.195.567.598.492 1.045l-2.958-.499a1.995 1.995 0 00.985 2.063l1.48-2.609zm-21.45 1.084c-.079-.47.158-.903.533-1.11l1.452 2.625a1.937 1.937 0 00.974-2.014l-2.958.5zM12 2v1.563h3V2h-3zM8.744 26.673c3.16.36 6.351.36 9.512 0l-.34-2.98a38.958 38.958 0 01-8.832 0l-.34 2.98zm10.66-.244c.091-.374.15-.755.178-1.139l-2.992-.214c-.016.218-.05.434-.1.646l2.915.707zm-.125.519l.126-.519-2.916-.707-.126.519 2.916.707zm-4.346 4.38c2.155-.522 3.823-2.222 4.346-4.38l-2.916-.707a2.928 2.928 0 01-2.137 2.172l.707 2.915zm-2.866 0a6.072 6.072 0 002.866 0l-.707-2.915a3.076 3.076 0 01-1.452 0l-.707 2.915zm-4.346-4.38c.523 2.158 2.191 3.858 4.346 4.38l.707-2.915a2.928 2.928 0 01-2.137-2.172l-2.916.707zm-.126-.519l.126.519 2.916-.707-.126-.519-2.916.707zm-.177-1.139c.027.384.087.765.177 1.139l2.916-.707a3.934 3.934 0 01-.1-.646l-2.993.214z"
        fill="#fff"
      />
    </Svg>
  );
}

export function HomeIcon(props: SvgProps & {isFocused?: boolean}) {
  return (
    <Svg width={27} height={27} viewBox="0 0 27 27" fill="none">
      <Path
        d="M24.625 10.332a1 1 0 10-2 0h2zm-20.25 0a1 1 0 10-2 0h2zm12.616 15.261l-.23-.973.23.973zm-6.982 0l.23-.973-.23.973zm7.42-21.795l-.71.704.71-.704zm7.861 9.337a1 1 0 101.42-1.41l-1.42 1.41zM9.572 3.798l.71.704-.71-.704zM.29 11.726a1 1 0 001.42 1.409l-1.42-1.41zm10.041 10.552l-.983-.184.983.184zm.027-.143l.983.185-.983-.185zm6.284 0l-.983.185.983-.185zm.027.143l.983-.184-.983.184zm-.403 3.1l-.903-.43.903.43zm-1.065-.09a1 1 0 001.806.86l-1.806-.86zm-4.467.09l-.903.43.903-.43zm-.741.77a1 1 0 001.806-.86l-1.806.86zm2.62-6.478l-.268-.963.268.963zm1.774 0l.268-.963-.268.963zm8.238-9.338v6.831h2v-6.831h-2zm-18.25 6.831v-6.831h-2v6.831h2zm12.386 7.457a14.179 14.179 0 01-6.522 0l-.46 1.946a16.18 16.18 0 007.442 0l-.46-1.946zm-6.522 0c-3.43-.81-5.864-3.896-5.864-7.457h-2c0 4.48 3.062 8.378 7.404 9.403l.46-1.946zm6.982 1.946c4.342-1.025 7.404-4.923 7.404-9.403h-2c0 3.561-2.433 6.646-5.864 7.457l.46 1.946zm-.502-22.064l8.571 8.633 1.42-1.41-8.572-8.632-1.42 1.41zm-7.857-1.41L.29 11.726l1.42 1.41 8.571-8.633-1.419-1.41zm9.276 0c-.906-.911-1.655-1.669-2.328-2.186C15.115.372 14.384 0 13.5 0v2c.267 0 .574.094 1.092.492.54.416 1.18 1.058 2.127 2.01l1.419-1.41zm-7.857 1.41c.946-.952 1.586-1.594 2.127-2.01.518-.398.825-.492 1.092-.492V0c-.884 0-1.615.372-2.31.906-.673.517-1.422 1.275-2.328 2.187l1.42 1.41zm1.033 17.96l.027-.142-1.966-.37-.027.144 1.966.369zm4.345-.142l.027.143 1.966-.37-.027-.142-1.966.369zm-.296 2.628l-.162.34 1.806.86.162-.34-1.806-.86zm-5.532.86l.162.34 1.806-.86-.162-.34-1.806.86zm5.855-3.345a4.048 4.048 0 01-.323 2.485l1.806.86a6.048 6.048 0 00.483-3.714l-1.966.369zm-6.338-.37a6.048 6.048 0 00.483 3.714l1.806-.86a4.048 4.048 0 01-.323-2.484l-1.966-.37zm3.532-1.46a2.319 2.319 0 011.24 0l.535-1.926a4.318 4.318 0 00-2.31 0l.535 1.927zm4.745 1.318a4.158 4.158 0 00-2.97-3.244l-.535 1.927c.787.218 1.386.87 1.54 1.686l1.965-.37zm-6.284.369a2.158 2.158 0 011.539-1.686l-.535-1.927a4.158 4.158 0 00-2.97 3.244l1.966.369z"
        fill={props.isFocused ? '#0600ac' : '#B5B5B5'}
      />
    </Svg>
  );
}

export function ProfileIcon(props: SvgProps & {isFocused?: boolean}) {
  return (
    <Svg width={23} height={29} viewBox="0 0 23 29" fill="none">
      <Path
        clipRule="evenodd"
        d="M11.74 18.736c-5.322 0-9.867.828-9.867 4.142 0 3.315 4.517 4.172 9.868 4.172 5.322 0 9.866-.83 9.866-4.142 0-3.313-4.515-4.172-9.866-4.172zM11.74 14.008c3.494 0 6.325-2.913 6.325-6.505S15.234 1 11.74 1 5.416 3.911 5.416 7.503c-.012 3.58 2.8 6.493 6.28 6.505h.045z"
        stroke={props.isFocused ? '#0600ac' : '#B5B5B5'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LikedIcon(props: SvgProps & {isFocused?: boolean}) {
  return (
    <Svg width={20} height={25} viewBox="0 0 20 25" fill="none">
      <Path
        d="M16.129.203l.023.798.083-.001c.646 0 1.194.196 1.559.466.363.268.497.563.502.805v19.844a1 1 0 01-1.581.814l-5.175-3.695a3 3 0 00-3.486 0L2.877 22.93l.58.814-.58-.814a1 1 0 01-1.581-.814V2.317a1.02 1.02 0 00.001-.055v0h-1 .028l.114.002L16.13.204zm0 0v.798h-.006l.006-.798z"
        stroke={props.isFocused ? '#0600ac' : '#B5B5B5'}
        strokeWidth={2}
      />
    </Svg>
  );
}

export function BalanceIcon(props: SvgProps & {isFocused?: boolean}) {
  return (
    <Svg width={30} height={28} viewBox="0 0 30 28" fill="none">
      <Path
        d="M9.4 9.55h5.764"
        stroke="#B5B5B5"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M2.028 18.314l.97-.244-.97.244zm0-8.98l.97.243-.97-.243zm26.27 0l.97-.244-.97.244zm0 8.98l-.97-.244.97.244zm-8.645 7.847l-.214-.977.214.977zm-8.98 0l.214-.977-.214.977zm0-24.675l.214.977-.214-.977zm8.98 0l.214-.977-.214.977zM10.02 26.018l-.214.977.214-.977zm10.288 0l.214.977-.214-.977zm0-24.389l-.214.977.214-.977zm-10.288 0L9.805.652l.214.977zm14.79 15.762l-.177.984.177-.984zm-.084-.015l.177-.984-.177.984zm0-7.105l.177.985-.177-.985zm.084-.015l-.177-.984.177.984zm3.36 1.351a1 1 0 10.795-1.836l-.794 1.836zm.795 6.269a1 1 0 00-.794-1.836l.794 1.836zm-7.203-3.157l-.96.277.96-.277zm0-1.79l.96.277-.96-.277zM10.233 2.605l.654-.143L10.46.509l-.654.143.428 1.954zm9.206-.143l.654.143.428-1.954-.654-.143-.428 1.954zm.654 22.578l-.654.143.428 1.954.654-.143-.428-1.954zm-9.206.143l-.654-.143-.428 1.954.654.143.428-1.954zm-7.89-7.114c-.7-2.789-.7-5.704 0-8.493L1.059 9.09a19.427 19.427 0 000 9.467l1.94-.487zM27.33 9.577c.7 2.789.7 5.704 0 8.493l1.94.487c.78-3.108.78-6.358 0-9.467l-1.94.487zm-7.89 15.607a19.986 19.986 0 01-8.552 0l-.428 1.954c3.099.679 6.31.679 9.408 0l-.428-1.954zM10.887 2.463a19.985 19.985 0 018.552 0l.428-1.954a21.986 21.986 0 00-9.408 0l.428 1.954zm-.654 22.578c-3.56-.78-6.36-3.484-7.235-6.97l-1.94.486c1.063 4.233 4.455 7.498 8.747 8.438l.428-1.954zm10.288 1.954c4.293-.94 7.685-4.205 8.748-8.438l-1.94-.487c-.876 3.487-3.675 6.191-7.236 6.971l.428 1.954zm-.428-24.389c3.56.78 6.36 3.484 7.236 6.971l1.94-.487C28.206 4.857 24.814 1.593 20.52.652l-.428 1.954zM9.805.652c-4.292.94-7.684 4.205-8.747 8.438l1.94.487c.876-3.487 3.675-6.19 7.235-6.97L9.805.651zm15.182 15.755l-.085-.015-.355 1.968.085.015.355-1.968zm-.085-5.151l.085-.016-.355-1.968-.085.015.355 1.969zm.085-.016a5.545 5.545 0 013.183.367l.794-1.836a7.544 7.544 0 00-4.332-.499l.355 1.968zm-.355 7.135c1.462.264 2.97.09 4.332-.5l-.794-1.835c-1 .433-2.109.56-3.183.367l-.355 1.968zm-1.91-3.934a2.224 2.224 0 010-1.235l-1.922-.555a4.224 4.224 0 000 2.345l1.922-.555zm1.825-5.154a4.774 4.774 0 00-3.747 3.364l1.922.555a2.774 2.774 0 012.18-1.95l-.355-1.969zm.355 7.105a2.774 2.774 0 01-2.18-1.95l-1.922.554a4.774 4.774 0 003.747 3.364l.355-1.968z"
        fill={props.isFocused ? '#0600ac' : '#B5B5B5'}
      />
    </Svg>
  );
}

export function SearchIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M21 21l-4.826-4.826m0 0a8.889 8.889 0 10-12.57-12.57 8.889 8.889 0 0012.57 12.57z"
        stroke="#343936"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function StarIcon({filled = false}) {
  let props = filled ? {fill: '#0600ac'} : {stroke: '#0600ac', strokeWidth: 1};
  return (
    <Svg width={18} height={18} viewBox="-1 -1 13 13" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.613.398L6.63 2.546c.1.21.291.357.514.39l2.271.347c.561.085.784.806.378 1.218L8.15 6.172a.734.734 0 00-.197.632l.388 2.36c.095.583-.491 1.028-.993.752l-2.03-1.114a.66.66 0 00-.636 0l-2.03 1.114c-.502.276-1.088-.169-.992-.753l.387-2.359a.734.734 0 00-.197-.632L.208 4.502c-.406-.413-.183-1.134.378-1.22l2.271-.345a.687.687 0 00.515-.391L4.387.398a.672.672 0 011.226 0z"
        {...props}
      />
    </Svg>
  );
}

export function ClockIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      viewBox="0 0 51 41"
      height={20}>
      <Path
        d="M200 237.87c-9.914 0-18 8.085-18 18 0 9.914 8.086 18 18 18s18-8.086 18-18c0-9.915-8.086-18-18-18zm0 4c7.75 0 14 6.25 14 14s-6.25 14-14 14-14-6.25-14-14 6.25-14 14-14z"
        transform="translate(-306.429 -335.22) translate(131.429 99.35)"
        color="#0600ac"
        fill="#0600ac"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={7.00000048}
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
        visibility="visible"
        display="inline"
        overflow="visible"
      />
      <Path
        d="M200.25 242.625a2 2 0 00-1.969 2.031v13.719a2 2 0 003.063 1.719l7.281-4.469a2 2 0 10-2.094-3.406l-4.25 2.594v-10.157a2 2 0 00-2.031-2.031z"
        transform="translate(-306.429 -335.22) translate(131.429 99.35)"
        fill="#0600ac"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        strokeWidth={3.99999881}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
    </Svg>
  );
}

export function PopIcon() {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        clipRule="evenodd"
        d="M4.885 7.79c2.095 0 3.885.317 3.885 1.585S6.992 10.97 4.885 10.97C2.79 10.97 1 10.655 1 9.387 1 8.118 2.778 7.79 4.885 7.79zM4.885 5.98a2.49 2.49 0 112.49-2.49 2.481 2.481 0 01-2.472 2.49h-.018z"
        stroke="#C8C8C8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.797 5.334a1.875 1.875 0 001.611-1.852c0-.931-.678-1.703-1.568-1.85M9.997 7.52c.88.132 1.496.44 1.496 1.077 0 .437-.29.721-.758.899"
        stroke="#C8C8C8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CircleIcon() {
  return (
    <Svg width={12} height={10} viewBox="0 0 12 10" fill="none">
      <Path
        d="M10.703 3.384L7.912 1.082l.92-.767c.25-.21.56-.315.927-.315.366 0 .675.105.927.315l.92.767c.251.21.382.464.393.76.011.297-.11.55-.36.76l-.936.782zm-.953.808L2.79 10H0V7.671l6.96-5.808 2.79 2.329z"
        fill="#fff"
      />
    </Svg>
  );
}

export function SMSIcon() {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Path
        d="M8.336 9.077h8.515m-8.515 4.608h5.419m.813 8.55h1.499c4.075 0 7.62-2.768 8.577-6.699a12.554 12.554 0 000-5.94l-.126-.515c-.922-3.788-3.927-6.732-7.757-7.597l-.538-.122a14.707 14.707 0 00-6.485 0l-.315.071C5.457 2.33 2.344 5.378 1.39 9.302a13.884 13.884 0 00.005 6.548 12.84 12.84 0 007.65 8.847l.167.067a3.272 3.272 0 004.233-1.777 1.22 1.22 0 011.124-.751z"
        stroke="#9A9A9A"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function SelectedIcon() {
  return (
    <Svg width={13} height={8} viewBox="0 0 13 8" fill="none">
      <Path
        d="M1.15 0L0 1.203 6.5 8 13 1.203 11.85 0 6.5 5.594 1.15 0z"
        fill="#343936"
      />
    </Svg>
  );
}

export function RatingIcon() {
  return (
    <Svg width={25} height={21} viewBox="0 0 25 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.116 8.647c.934 0 1.844-.301 2.593-.858a4.327 4.327 0 001.566-2.231h3.279a1.242 1.242 0 001.24-1.236 1.233 1.233 0 00-1.24-1.235h-3.28a4.327 4.327 0 00-1.566-2.23 4.35 4.35 0 00-5.185 0 4.327 4.327 0 00-1.566 2.23H1.24A1.242 1.242 0 000 4.322a1.234 1.234 0 001.24 1.236h10.717a4.327 4.327 0 001.565 2.231c.75.557 1.66.857 2.594.858zM1.24 15.442A1.242 1.242 0 000 16.678a1.234 1.234 0 001.24 1.235h2.659a4.327 4.327 0 001.566 2.23 4.35 4.35 0 005.185 0 4.327 4.327 0 001.567-2.23h11.337a1.242 1.242 0 001.24-1.235 1.233 1.233 0 00-1.24-1.236H12.217a4.327 4.327 0 00-1.567-2.23 4.35 4.35 0 00-5.185 0 4.327 4.327 0 00-1.566 2.23h-2.66z"
        fill="#fff"
      />
    </Svg>
  );
}

export function RatingArrowIcon() {
  return (
    <Svg width={11} height={7} viewBox="0 0 11 7" fill="none">
      <Path
        d="M.974 0L0 1.053 5.5 7 11 1.053 10.027 0 5.5 4.895.973 0z"
        fill="#9A9A9A"
      />
    </Svg>
  );
}

export function DateIcon() {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        d="M1 6.115c0-2.03 0-3.046.586-3.676.585-.631 1.528-.631 3.414-.631h2c1.886 0 2.829 0 3.414.63C11 3.07 11 4.086 11 6.116v1.077c0 2.03 0 3.046-.586 3.677-.585.63-1.528.63-3.414.63H5c-1.885 0-2.829 0-3.414-.63C1 10.239 1 9.223 1 7.192V6.115z"
        stroke="#B5B5B5"
      />
      <Path
        d="M3.5 1.808V1m5 .808V1M1.25 4.5h9.5"
        stroke="#B5B5B5"
        strokeLinecap="round"
      />
      <Path
        d="M9 8.808a.56.56 0 01-.147.38.483.483 0 01-.353.158.483.483 0 01-.354-.158.56.56 0 01-.146-.38.56.56 0 01.146-.381.483.483 0 01.354-.158c.133 0 .26.057.353.158a.56.56 0 01.147.38zm0-2.154a.56.56 0 01-.147.38.483.483 0 01-.353.158.483.483 0 01-.354-.158.56.56 0 01-.146-.38.56.56 0 01.146-.381.483.483 0 01.354-.158c.133 0 .26.057.353.158a.56.56 0 01.147.38zM6.5 8.808a.56.56 0 01-.147.38.483.483 0 01-.353.158.483.483 0 01-.354-.158.56.56 0 01-.146-.38.56.56 0 01.146-.381A.483.483 0 016 8.269c.133 0 .26.057.353.158a.56.56 0 01.147.38zm0-2.154a.56.56 0 01-.147.38.483.483 0 01-.353.158.483.483 0 01-.354-.158.56.56 0 01-.146-.38.56.56 0 01.146-.381A.483.483 0 016 6.115c.133 0 .26.057.353.158a.56.56 0 01.147.38zM4 8.808a.56.56 0 01-.147.38.483.483 0 01-.353.158.483.483 0 01-.354-.158.56.56 0 01-.146-.38.56.56 0 01.146-.381.483.483 0 01.354-.158c.133 0 .26.057.353.158a.56.56 0 01.147.38zm0-2.154a.56.56 0 01-.147.38.483.483 0 01-.353.158.483.483 0 01-.354-.158.56.56 0 01-.146-.38.56.56 0 01.146-.381.483.483 0 01.354-.158c.133 0 .26.057.353.158a.56.56 0 01.147.38z"
        fill="#B5B5B5"
      />
    </Svg>
  );
}

export function SavedIcon() {
  return (
    <Svg width={20} height={27} viewBox="0 0 20 27" fill="none">
      <Path
        d="M16.666.21l.016.54h.096c.735 0 1.373.227 1.814.56.44.333.651.74.658 1.133v21.62a1.25 1.25 0 01-1.987 1.01l-5.64-4.12a2.75 2.75 0 00-3.244 0l-5.642 4.12a1.25 1.25 0 01-1.987-1.01V2.485a.763.763 0 00.002-.049v0L16.666.209zm0 0V.75h-.006l.006-.542z"
        stroke="#9A9A9A"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export function YouTubeIcon() {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" fill="none">
      <Path
        d="M13.8 1H4.2C2.433 1 1 2.393 1 4.111v7.778C1 13.607 2.433 15 4.2 15h9.6c1.767 0 3.2-1.393 3.2-3.111V4.11C17 2.393 15.567 1 13.8 1z"
        stroke="#0600ac"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.914 5.032C7.136 5.322 7 6.872 7 8s.136 2.64.914 2.966C8.693 11.29 12 9.267 12 7.999 12 6.73 8.743 4.72 7.914 5.032z"
        stroke="#0600ac"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TasksIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M9.326 6.518h4.213M4.511 6.517l.602.602 1.806-1.806M9.326 12.135h4.213M4.511 12.134l.602.602 1.806-1.805"
        stroke="#0600ac"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.618 17h4.815c4.012 0 5.617-1.6 5.617-5.6V6.6c0-4-1.605-5.6-5.617-5.6H6.618C2.605 1 1 2.6 1 6.6v4.8c0 4 1.605 5.6 5.618 5.6z"
        stroke="#0600ac"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BookIcon() {
  return (
    <Svg width={17} height={19} viewBox="0 0 17 19" fill="none">
      <Path
        d="M11.666 13.01H5.23M11.666 9.278H5.23M7.686 5.555H5.23"
        stroke="#0600ac"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M11.837 1l-6.853.004C2.524 1.019 1 2.637 1 5.107v8.197c0 2.481 1.535 4.106 4.016 4.106l6.854-.003c2.46-.015 3.985-1.634 3.985-4.104V5.107C15.855 2.625 14.319 1 11.837 1z"
        stroke="#0600ac"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ExportIcon() {
  return (
    <Svg width={16} height={18} viewBox="0 0 16 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.488 0C5.714 0 5.07.591 5.001 1.362a37.118 37.118 0 00-.107 4.845l-.253.018-1.49.108a1.26 1.26 0 00-.97 1.935 16.055 16.055 0 004.163 4.395l.596.429a1.388 1.388 0 001.62 0l.596-.429a16.053 16.053 0 004.162-4.395 1.26 1.26 0 00-.97-1.935l-1.49-.108a42.66 42.66 0 00-.252-.018c.07-1.615.034-3.234-.107-4.845A1.492 1.492 0 009.012 0H6.488zm-.056 6.865A35.625 35.625 0 016.495 1.5h2.51a35.61 35.61 0 01.064 5.365.75.75 0 00.711.796c.324.016.647.036.97.06l1.081.079a14.554 14.554 0 01-3.55 3.645l-.53.381-.532-.381a14.554 14.554 0 01-3.55-3.646l1.081-.077c.323-.024.647-.044.97-.06a.75.75 0 00.712-.796v-.001z"
        fill="#0600ac"
      />
      <Path
        d="M1.5 13.75a.75.75 0 10-1.5 0v2c0 .966.784 1.75 1.75 1.75h12a1.75 1.75 0 001.75-1.75v-2a.75.75 0 10-1.5 0v2a.25.25 0 01-.25.25h-12a.25.25 0 01-.25-.25v-2z"
        fill="#0600ac"
      />
    </Svg>
  );
}

export function RadiusIcon() {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" fill="none">
      <Circle cx={4} cy={4} r={4} fill="#0600ac" />
    </Svg>
  );
}

export function BalanceCostIcon() {
  return (
    <Svg width={30} height={28} viewBox="0 0 30 28" fill="none">
      <Path
        d="M9.4 9.55h5.764"
        stroke="#0600ac"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M2.028 18.314l.97-.244-.97.244zm0-8.98l.97.243-.97-.243zm26.27 0l.97-.244-.97.244zm0 8.98l-.97-.244.97.244zm-8.645 7.847l-.214-.977.214.977zm-8.98 0l.214-.977-.214.977zm0-24.675l.214.977-.214-.977zm8.98 0l.214-.977-.214.977zM10.02 26.018l-.214.977.214-.977zm10.288 0l.214.977-.214-.977zm0-24.389l-.214.977.214-.977zm-10.288 0L9.805.652l.214.977zm14.79 15.762l-.177.984.177-.984zm-.084-.015l.177-.984-.177.984zm0-7.105l.177.985-.177-.985zm.084-.015l-.177-.984.177.984zm3.36 1.351a1 1 0 10.795-1.836l-.794 1.836zm.795 6.269a1 1 0 00-.794-1.836l.794 1.836zm-7.203-3.157l-.96.277.96-.277zm0-1.79l.96.277-.96-.277zM10.233 2.605l.654-.143L10.46.509l-.654.143.428 1.954zm9.206-.143l.654.143.428-1.954-.654-.143-.428 1.954zm.654 22.578l-.654.143.428 1.954.654-.143-.428-1.954zm-9.206.143l-.654-.143-.428 1.954.654.143.428-1.954zm-7.89-7.114c-.7-2.789-.7-5.704 0-8.493L1.059 9.09a19.427 19.427 0 000 9.467l1.94-.487zM27.33 9.577c.7 2.789.7 5.704 0 8.493l1.94.487c.78-3.108.78-6.358 0-9.467l-1.94.487zm-7.89 15.607a19.986 19.986 0 01-8.552 0l-.428 1.954c3.099.679 6.31.679 9.408 0l-.428-1.954zM10.887 2.463a19.985 19.985 0 018.552 0l.428-1.954a21.986 21.986 0 00-9.408 0l.428 1.954zm-.654 22.578c-3.56-.78-6.36-3.484-7.235-6.97l-1.94.486c1.063 4.233 4.455 7.498 8.747 8.438l.428-1.954zm10.288 1.954c4.293-.94 7.685-4.205 8.748-8.438l-1.94-.487c-.876 3.487-3.675 6.191-7.236 6.971l.428 1.954zm-.428-24.389c3.56.78 6.36 3.484 7.236 6.971l1.94-.487C28.206 4.857 24.814 1.593 20.52.652l-.428 1.954zM9.805.652c-4.292.94-7.684 4.205-8.747 8.438l1.94.487c.876-3.487 3.675-6.19 7.235-6.97L9.805.651zm15.182 15.755l-.085-.015-.355 1.968.085.015.355-1.968zm-.085-5.151l.085-.016-.355-1.968-.085.015.355 1.969zm.085-.016a5.545 5.545 0 013.183.367l.794-1.836a7.544 7.544 0 00-4.332-.499l.355 1.968zm-.355 7.135c1.462.264 2.97.09 4.332-.5l-.794-1.835c-1 .433-2.109.56-3.183.367l-.355 1.968zm-1.91-3.934a2.224 2.224 0 010-1.235l-1.922-.555a4.224 4.224 0 000 2.345l1.922-.555zm1.825-5.154a4.774 4.774 0 00-3.747 3.364l1.922.555a2.774 2.774 0 012.18-1.95l-.355-1.969zm.355 7.105a2.774 2.774 0 01-2.18-1.95l-1.922.554a4.774 4.774 0 003.747 3.364l.355-1.968z"
        fill={'#0600ac'}
      />
    </Svg>
  );
}

export function RemoveIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M3.375 18c-.619 0-1.148-.196-1.589-.587-.44-.392-.661-.863-.661-1.413V3H0V1h5.625V0h6.75v1H18v2h-1.125v13c0 .55-.22 1.021-.66 1.413-.441.391-.971.587-1.59.587H3.375zm11.25-15H3.375v13h11.25V3zm-9 11h2.25V5h-2.25v9zm4.5 0h2.25V5h-2.25v9zM3.375 3v13V3z"
        fill="#C8C8C8"
      />
    </Svg>
  );
}
