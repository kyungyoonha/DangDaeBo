import React from 'react';
import styled from 'styled-components';

import useScroll from '../hooks/useScroll';
// import Canvas from '../components/Canvas/Canvas';

const Test = () => {
  const { percent, onScroll } = useScroll();
  // return <Canvas />;
  console.log(percent);
  return (
    <Wrapper onScroll={onScroll}>
      <div style={{ position: 'absolute', transfrom: 'translate(-50%) translateY(4380px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1382" height="7975" viewBox="0 0 1382 7975">
          {/* 로켓 */}
          <path
            className="AirPlanePath_AirPlanePath__33jDp"
            fill="#FFF"
            d="M2.947 34.578c2.355-2.159 6.014-2.099 8.297.18 2.341 2.344 2.341 6.142 0 8.487C9.09 45.4 1.884 45.944 1.07 46h-.067c-.277 0-.542-.114-.732-.316-.19-.202-.286-.474-.268-.751.057-.815.6-8.02 2.757-10.176zm36.891-10.004c1.3 6.09-1.346 12.596-7.22 17.212-.398.313-.967.279-1.325-.079l-4.784-4.783c5.192-3.226 9.717-7.419 13.33-12.35zM44.947.002c.285-.017.563.093.76.3.2.2.306.474.292.757C44.446 28.375 20.6 37.84 20.359 37.934c-.114.044-.236.067-.358.066-.265 0-.52-.105-.707-.293l-11-11c-.277-.277-.367-.692-.228-1.06.092-.241 9.44-24.212 36.88-25.645zM26 16c-2.209 0-4 1.79-4 4 0 2.209 1.791 4 4 4 2.21 0 4-1.791 4-4 0-2.21-1.79-4-4-4zM4.216 13.383c4.586-5.839 11.043-8.482 17.102-7.24-4.91 3.607-9.076 8.132-12.265 13.324l-4.758-4.759c-.358-.358-.392-.927-.08-1.325z"
            style={{
              transform: 'translate(173.33px, 6149.56px) rotate(-2.31909rad) scale(1)',
              opacity: 1,
            }}></path>
          {/* 전체 경로 */}
          <path
            className="LinePath_LinePath__1Bn1i LinePath_LinePathGray__Mpk3g"
            fill="none"
            fillRule="evenodd"
            stroke="#FFF"
            strokeWidth="3"
            d="M634.627 189.486c1.42-5.476-7.744-6.58-12.706-3.863-13.219 7.24-22.882 20.654-25.563 35.485-.583 3.224-.295 7.457 2.79 8.564 2.434.874 4.966-.88 6.916-2.58 12.261-10.695 22.576-23.614 30.291-37.938-7.412 9.827-11.867 21.855-12.644 34.14-.167 2.647.662 6.222 3.313 6.241 1.398.011 2.525-1.086 3.476-2.109 24.631-26.53 45.34-56.694 61.247-89.213 1.872-3.827 3.59-8.702.942-12.039-4.476-5.646-13.195.75-16.875 6.944-13.308 22.4-21.596 47.761-24.086 73.695-.355 3.701-.209 8.203 2.983 10.107 3.817 2.277 8.442-1.047 11.62-4.152 27.681-27.047 55.346-54.108 82.996-81.186 8.128-7.96 16.134-21.927 10.134-29.927-3.82-5.093-10.285 5.958-12.67 11.861-12.679 31.361-24.626 63.016-35.83 94.933 6.465-22.198 20.5-53.794 42.5-58.794 8.83-2.007-15.636 41.91-12 47 5 7 18.115-15.832 22.943-27.865 1.594-3.972 2.95-8.227 5.976-11.253 3.028-3.026 8.417-4.24 11.52-1.29 2.944 2.8 2.382 7.595 1.252 11.497-3.157 10.896-9.05 20.988-16.989 29.091-1.692 1.727-4.053 3.494-6.306 2.618-2.18-.848-2.784-3.619-2.865-5.957-.404-11.697 4.633-23.47 13.371-31.257 10.62-9.462 34.208-26.164 36.098-18.584 1.553 6.23-20.389 33.445-18 43 4 16 27.981-56.68 38-50 6 4-8.297 32.818-13 45 7.4-20.669 18.2-43.517 38-53 15.843-7.588-19.752 48.592-6.5 46.5 9.5-1.5 54-48 48-55-8-2-28.009 12.3-31.5 31.5-4 22 8 20 14 15 52.215-43.512 85.895-105.922 141.694-145.828 72.43-51.799 160.578 1.066 197.001 70.535 34.206 65.244 34.32 145.115 9.847 214.598C1149.6 517.2 900.95 632.696 688.286 591.522c-92.93-17.993-177.939-65.744-270.957-82.203-83.953-14.855-173.62 2.7-244.972 49.626-135.182 88.91-220.1 311.084-58.56 418.872 29.542 19.711 64.455 30.421 99.72 34.537 97.93 11.428 214.546-37.654 271.894-118.833 76.454-108.225 9.865-256.555-122.67-268.486-117.89-10.612-273.454 83.806-283.784 210.02-5.664 69.22 38.903 135.644 98.237 171.733 159.86 97.233 360.154 27.94 513.978-46.456 63.245-30.588 125.786-68.277 192.811-90.194 42.727-13.97 89.13-19.878 132.8-9.21 96.02 23.454 134.242 132.05 113.596 221.127-15.9 68.608-68.636 132.262-137.913 151.468-85.437 23.687-179.638-5.426-263.574-21.919-207.982-40.866-419.73-14.442-575.54 142.641-69.225 69.79-123.399 156.592-144.29 252.644-20.893 96.052-6.206 201.526 49.748 282.344 55.954 80.818 155.184 132.848 252.92 122.342 71.542-7.69 135.994-46.153 193.86-88.92 57.865-42.768 112.363-91.11 176.52-123.69 61.972-31.472 131.861-47.2 201.342-45.312 67.244 1.827 139.145 23.631 177.948 78.581 30.283 42.884 27.642 97.6 21.132 147.42-6.83 52.27-23.173 103.433-48.497 149.694-31.54 57.614-82.9 102.283-138.938 136.543-18.543 11.337-37.988 21.175-58.057 29.51-83.262 34.584-177.033 42.58-266.325 38.004-32.293-1.655-66.889.8-98.492-6.648-27.956-6.589-61.435-27.83-52.47-61.265 6.505-24.263 30.582-39.144 53.587-49.234 70.51-30.922 150.486-39.84 226.076-25.209 39.664 7.677 83.836 27.861 92.12 67.404 13.797 65.88-101.63 79.371-144.135 83.91-137.22 14.656-283.29 39.151-400.628 117.095-61.425 40.802-108.084 99.328-110.303 174.66-.956 32.446 3.03 65.501 16.013 95.252 26.051 59.696 86.45 99.63 150.074 113.558 115.816 25.353 229.737-24.144 338.313-57.836 127.69-39.622 265.787-36.719 357.155 74.181 15.358 18.641 28.354 39.413 36.715 62.073 19.575 53.06 11.438 115.51-21.083 161.78-43.304 61.615-122.904 89.331-198.213 88.832-83.72-.554-156.907-34.463-235.78-56.116-97.336-26.72-198.6-24.22-294.464 6.512-62.863 20.153-127.334 52.005-158.55 110.172-33.357 62.154-18.695 143.587 26.927 197.39 45.621 53.8 117.32 81.325 187.837 83.112 70.518 1.786 139.96-20.014 203.07-51.529 76.641-38.274 147.073-91.453 229.913-113.28 82.84-21.827 186.732-.458 224.376 76.496 27.625 56.474 9.925 128.17-32.567 174.504-42.492 46.335-105.32 69.883-167.808 76.807-62.486 6.924-125.552-1.178-187.898-9.269l-154.95-20.109c-93.349-12.115-203.067-18.567-265.773 51.64-57.545 64.427-43.48 173.482 18.025 234.141 61.505 60.66 157.392 76.65 241.66 57.64 99.238-22.389 202.003-56.088 297.011 1.73 49.398 30.06 89.601 72.536 131.738 111.542 60.617 56.115 137.925 108.873 219.286 94.602 35.27-6.186 72.085-31.912 71.743-67.718-.3-31.489-30.738-56.377-61.962-60.46-31.225-4.083-62.277 7.743-90.479 21.755-178.518 88.7-294.475 264.862-397.186 435.703-21.487 35.741-42.776 71.602-63.862 107.58-36.755 62.71-76.945 129.563-143.093 159.693-25.188 11.472-57.96 15.604-78.092-3.39-27.38-25.835-10.903-73.32 16.152-99.496 13.282-12.85 28.973-23.687 46.744-28.76 58.79-16.784 117.655 35.36 137.521 93.18 19.867 57.82 14.16 120.94 22.375 181.523 4.766 35.143 15.187 71.244 39.973 96.61 24.488 25.06 59.917 36.393 94.641 41.086 24.363 3.292 49.454 3.721 73.237-2.507 42.063-11.018 75.997-41.487 115.204-60.289 64.196-30.783 144.551-27.45 203.855 11.943 152.771 101.486 62.21 362.4-71.086 441.233-60.752 35.93-126.027 42.092-194.65 44.098-72.2 2.111-144.823 5.254-215.677 20.363-97.105 20.71-193.039 66.998-250.683 147.84-18.539 25.997-33.053 59.555-21.354 89.266 8.682 22.048 30.48 36.877 53.403 42.876 22.925 6 47.091 4.43 70.667 2.05 74.56-7.53 149.054-22.984 216.97-54.655 67.917-31.668 129.178-80.459 167.616-144.786 17.695-29.614 30.447-62.423 35.187-96.594 2.13-15.354 2.285-32.224-6.659-44.883-8.35-11.819-23.282-17.572-37.735-18.273-61.858-2.998-111.432 45.931-152.957 84.975-73.025 68.663-131.062 151.268-204.432 219.36-69.61 64.605-150.006 117.584-236.893 155.938-98.113 43.31-229.76 107.654-224.254 235.532 4.911 113.984 145.303 188.831 247.6 149.428 18.72-7.21 35.782-21.713 40.762-41.147 5.741-22.403-6.12-46.633-24.368-60.842-18.247-14.209-41.7-19.962-64.69-22.477-21.603-2.363-44.036-2.088-64.315 5.725-20.278 7.811-38.149 24.21-43.332 45.313-12.028 48.97 40.635 91.14 82.3 101.011 51.142 12.116 105.793 5.156 154.576-13.2 61.756-23.24 115.514-63.634 165.385-106.84 113.225-98.094 220.994-204.854 361.066-264.49 82.656-35.19 197.248-50.938 256.371 34.571 44.844 64.86 10.53 124.115-22.452 184.497-40.995 75.052-93.749 141.991-139.49 213.947-29.779 46.845-59.86 94.164-84.206 144.13-40.608 83.336-71.39 195.05-16.254 279.074 29.651 45.186 101.143 64.593 138.9 25.932 14.131-14.47 21.513-34.629 23.063-54.794 6.26-81.44-76.956-140.374-151.679-110.252-35.59 14.347-63.799 42.26-89.556 70.702-75.048 82.871-160.383 146.13-265.137 187.618-80.34 31.822-166.315 49.667-252.737 51.624-73.478 1.663-171.646.861-227.9-54.216-48.875-47.85-36.268-116.53.905-168.294 52.081-72.525 127.045-134.063 207.197-172.565 39.415-18.934 82.57-33.273 126.161-29.842 69.052 5.437 81.018 74.973 62.028 130.725-57.493 168.791-268.667 220.671-365.712 360.46-20.07 28.91-26.778 70.14-6.445 98.857 10.984 15.514 28.412 25.52 46.605 31.03 47.647 14.425 104.454 10.251 150.526-7.77 80.064-31.32 141.054-107.33 226.036-120.338 120.434-18.433 220.855 95.985 341.003 116.2 59.662 10.04 114.053-10.153 166.294-37.057 57.051-29.383 134.114-81.207 198.4-41.174 53.802 33.505 74.96 104.316 55.366 163.374-30.547 92.072-141.692 145.218-232.509 151.391-205.788 13.987-412.375-82.21-614.47-40.957-119.579 24.411-223.006 99.035-291.62 198.725-63.873 92.803-111.233 228.606-45.972 333.302 105.602 169.413 336.551 61.77 457.648-29.207 77.941-58.554 156.178-120.778 206.88-205.75-15.998 33.995-20.187 66.313-17.998 57.995 10-38 37.662-67.288 43-68 15-2-27.368 59.394-7 56 6-1 22-49 36.177-55.324 5.818-2.596 11.546-.04 11.823 6.324 1 23-20 48-30 48-15.204 0 .085-34.475 10-46 9.915-11.525 28-17 41-18 5.084-.392-23.03 40.188-14 51 11.97-12.812 19.667-47.757 26.66-41.092 5.34 5.092-3.967 39.468 5.84 32.592 15.38-10.783 17.193-29.618 26.217-44.5 9.26-15.272 24.801-25.425 39.851-34.317 140.927-83.269 316.642-159.04 482.931-116.183"
            style={{ strokeDashoffset: '0', strokeDasharray: '23346.8, 33434.2' }}></path>
          {/* 위에글씨 A */}
          <path
            className="LinePath_LineStrokePath__3PnK9 LinePath_LinePathGray__Mpk3g"
            fill="none"
            fillRule="evenodd"
            stroke="#FFF"
            strokeWidth="3"
            d="M625.132 171.005c26.566-11.318 54.616-19.149 83.203-23.232M625.132 171.005c26.566-11.318 54.616-19.149 83.203-23.232"
            style={{ strokeDasharray: '5000, 5000' }}></path>
          {/* 꼬리 */}
          <path
            className="LinePath_LinePath__1Bn1i "
            fill="none"
            fillRule="evenodd"
            stroke="#FFF"
            strokeWidth="3"
            d="M634.627 189.486c1.42-5.476-7.744-6.58-12.706-3.863-13.219 7.24-22.882 20.654-25.563 35.485-.583 3.224-.295 7.457 2.79 8.564 2.434.874 4.966-.88 6.916-2.58 12.261-10.695 22.576-23.614 30.291-37.938-7.412 9.827-11.867 21.855-12.644 34.14-.167 2.647.662 6.222 3.313 6.241 1.398.011 2.525-1.086 3.476-2.109 24.631-26.53 45.34-56.694 61.247-89.213 1.872-3.827 3.59-8.702.942-12.039-4.476-5.646-13.195.75-16.875 6.944-13.308 22.4-21.596 47.761-24.086 73.695-.355 3.701-.209 8.203 2.983 10.107 3.817 2.277 8.442-1.047 11.62-4.152 27.681-27.047 55.346-54.108 82.996-81.186 8.128-7.96 16.134-21.927 10.134-29.927-3.82-5.093-10.285 5.958-12.67 11.861-12.679 31.361-24.626 63.016-35.83 94.933 6.465-22.198 20.5-53.794 42.5-58.794 8.83-2.007-15.636 41.91-12 47 5 7 18.115-15.832 22.943-27.865 1.594-3.972 2.95-8.227 5.976-11.253 3.028-3.026 8.417-4.24 11.52-1.29 2.944 2.8 2.382 7.595 1.252 11.497-3.157 10.896-9.05 20.988-16.989 29.091-1.692 1.727-4.053 3.494-6.306 2.618-2.18-.848-2.784-3.619-2.865-5.957-.404-11.697 4.633-23.47 13.371-31.257 10.62-9.462 34.208-26.164 36.098-18.584 1.553 6.23-20.389 33.445-18 43 4 16 27.981-56.68 38-50 6 4-8.297 32.818-13 45 7.4-20.669 18.2-43.517 38-53 15.843-7.588-19.752 48.592-6.5 46.5 9.5-1.5 54-48 48-55-8-2-28.009 12.3-31.5 31.5-4 22 8 20 14 15 52.215-43.512 85.895-105.922 141.694-145.828 72.43-51.799 160.578 1.066 197.001 70.535 34.206 65.244 34.32 145.115 9.847 214.598C1149.6 517.2 900.95 632.696 688.286 591.522c-92.93-17.993-177.939-65.744-270.957-82.203-83.953-14.855-173.62 2.7-244.972 49.626-135.182 88.91-220.1 311.084-58.56 418.872 29.542 19.711 64.455 30.421 99.72 34.537 97.93 11.428 214.546-37.654 271.894-118.833 76.454-108.225 9.865-256.555-122.67-268.486-117.89-10.612-273.454 83.806-283.784 210.02-5.664 69.22 38.903 135.644 98.237 171.733 159.86 97.233 360.154 27.94 513.978-46.456 63.245-30.588 125.786-68.277 192.811-90.194 42.727-13.97 89.13-19.878 132.8-9.21 96.02 23.454 134.242 132.05 113.596 221.127-15.9 68.608-68.636 132.262-137.913 151.468-85.437 23.687-179.638-5.426-263.574-21.919-207.982-40.866-419.73-14.442-575.54 142.641-69.225 69.79-123.399 156.592-144.29 252.644-20.893 96.052-6.206 201.526 49.748 282.344 55.954 80.818 155.184 132.848 252.92 122.342 71.542-7.69 135.994-46.153 193.86-88.92 57.865-42.768 112.363-91.11 176.52-123.69 61.972-31.472 131.861-47.2 201.342-45.312 67.244 1.827 139.145 23.631 177.948 78.581 30.283 42.884 27.642 97.6 21.132 147.42-6.83 52.27-23.173 103.433-48.497 149.694-31.54 57.614-82.9 102.283-138.938 136.543-18.543 11.337-37.988 21.175-58.057 29.51-83.262 34.584-177.033 42.58-266.325 38.004-32.293-1.655-66.889.8-98.492-6.648-27.956-6.589-61.435-27.83-52.47-61.265 6.505-24.263 30.582-39.144 53.587-49.234 70.51-30.922 150.486-39.84 226.076-25.209 39.664 7.677 83.836 27.861 92.12 67.404 13.797 65.88-101.63 79.371-144.135 83.91-137.22 14.656-283.29 39.151-400.628 117.095-61.425 40.802-108.084 99.328-110.303 174.66-.956 32.446 3.03 65.501 16.013 95.252 26.051 59.696 86.45 99.63 150.074 113.558 115.816 25.353 229.737-24.144 338.313-57.836 127.69-39.622 265.787-36.719 357.155 74.181 15.358 18.641 28.354 39.413 36.715 62.073 19.575 53.06 11.438 115.51-21.083 161.78-43.304 61.615-122.904 89.331-198.213 88.832-83.72-.554-156.907-34.463-235.78-56.116-97.336-26.72-198.6-24.22-294.464 6.512-62.863 20.153-127.334 52.005-158.55 110.172-33.357 62.154-18.695 143.587 26.927 197.39 45.621 53.8 117.32 81.325 187.837 83.112 70.518 1.786 139.96-20.014 203.07-51.529 76.641-38.274 147.073-91.453 229.913-113.28 82.84-21.827 186.732-.458 224.376 76.496 27.625 56.474 9.925 128.17-32.567 174.504-42.492 46.335-105.32 69.883-167.808 76.807-62.486 6.924-125.552-1.178-187.898-9.269l-154.95-20.109c-93.349-12.115-203.067-18.567-265.773 51.64-57.545 64.427-43.48 173.482 18.025 234.141 61.505 60.66 157.392 76.65 241.66 57.64 99.238-22.389 202.003-56.088 297.011 1.73 49.398 30.06 89.601 72.536 131.738 111.542 60.617 56.115 137.925 108.873 219.286 94.602 35.27-6.186 72.085-31.912 71.743-67.718-.3-31.489-30.738-56.377-61.962-60.46-31.225-4.083-62.277 7.743-90.479 21.755-178.518 88.7-294.475 264.862-397.186 435.703-21.487 35.741-42.776 71.602-63.862 107.58-36.755 62.71-76.945 129.563-143.093 159.693-25.188 11.472-57.96 15.604-78.092-3.39-27.38-25.835-10.903-73.32 16.152-99.496 13.282-12.85 28.973-23.687 46.744-28.76 58.79-16.784 117.655 35.36 137.521 93.18 19.867 57.82 14.16 120.94 22.375 181.523 4.766 35.143 15.187 71.244 39.973 96.61 24.488 25.06 59.917 36.393 94.641 41.086 24.363 3.292 49.454 3.721 73.237-2.507 42.063-11.018 75.997-41.487 115.204-60.289 64.196-30.783 144.551-27.45 203.855 11.943 152.771 101.486 62.21 362.4-71.086 441.233-60.752 35.93-126.027 42.092-194.65 44.098-72.2 2.111-144.823 5.254-215.677 20.363-97.105 20.71-193.039 66.998-250.683 147.84-18.539 25.997-33.053 59.555-21.354 89.266 8.682 22.048 30.48 36.877 53.403 42.876 22.925 6 47.091 4.43 70.667 2.05 74.56-7.53 149.054-22.984 216.97-54.655 67.917-31.668 129.178-80.459 167.616-144.786 17.695-29.614 30.447-62.423 35.187-96.594 2.13-15.354 2.285-32.224-6.659-44.883-8.35-11.819-23.282-17.572-37.735-18.273-61.858-2.998-111.432 45.931-152.957 84.975-73.025 68.663-131.062 151.268-204.432 219.36-69.61 64.605-150.006 117.584-236.893 155.938-98.113 43.31-229.76 107.654-224.254 235.532 4.911 113.984 145.303 188.831 247.6 149.428 18.72-7.21 35.782-21.713 40.762-41.147 5.741-22.403-6.12-46.633-24.368-60.842-18.247-14.209-41.7-19.962-64.69-22.477-21.603-2.363-44.036-2.088-64.315 5.725-20.278 7.811-38.149 24.21-43.332 45.313-12.028 48.97 40.635 91.14 82.3 101.011 51.142 12.116 105.793 5.156 154.576-13.2 61.756-23.24 115.514-63.634 165.385-106.84 113.225-98.094 220.994-204.854 361.066-264.49 82.656-35.19 197.248-50.938 256.371 34.571 44.844 64.86 10.53 124.115-22.452 184.497-40.995 75.052-93.749 141.991-139.49 213.947-29.779 46.845-59.86 94.164-84.206 144.13-40.608 83.336-71.39 195.05-16.254 279.074 29.651 45.186 101.143 64.593 138.9 25.932 14.131-14.47 21.513-34.629 23.063-54.794 6.26-81.44-76.956-140.374-151.679-110.252-35.59 14.347-63.799 42.26-89.556 70.702-75.048 82.871-160.383 146.13-265.137 187.618-80.34 31.822-166.315 49.667-252.737 51.624-73.478 1.663-171.646.861-227.9-54.216-48.875-47.85-36.268-116.53.905-168.294 52.081-72.525 127.045-134.063 207.197-172.565 39.415-18.934 82.57-33.273 126.161-29.842 69.052 5.437 81.018 74.973 62.028 130.725-57.493 168.791-268.667 220.671-365.712 360.46-20.07 28.91-26.778 70.14-6.445 98.857 10.984 15.514 28.412 25.52 46.605 31.03 47.647 14.425 104.454 10.251 150.526-7.77 80.064-31.32 141.054-107.33 226.036-120.338 120.434-18.433 220.855 95.985 341.003 116.2 59.662 10.04 114.053-10.153 166.294-37.057 57.051-29.383 134.114-81.207 198.4-41.174 53.802 33.505 74.96 104.316 55.366 163.374-30.547 92.072-141.692 145.218-232.509 151.391-205.788 13.987-412.375-82.21-614.47-40.957-119.579 24.411-223.006 99.035-291.62 198.725-63.873 92.803-111.233 228.606-45.972 333.302 105.602 169.413 336.551 61.77 457.648-29.207 77.941-58.554 156.178-120.778 206.88-205.75-15.998 33.995-20.187 66.313-17.998 57.995 10-38 37.662-67.288 43-68 15-2-27.368 59.394-7 56 6-1 22-49 36.177-55.324 5.818-2.596 11.546-.04 11.823 6.324 1 23-20 48-30 48-15.204 0 .085-34.475 10-46 9.915-11.525 28-17 41-18 5.084-.392-23.03 40.188-14 51 11.97-12.812 19.667-47.757 26.66-41.092 5.34 5.092-3.967 39.468 5.84 32.592 15.38-10.783 17.193-29.618 26.217-44.5 9.26-15.272 24.801-25.425 39.851-34.317 140.927-83.269 316.642-159.04 482.931-116.183"
            style={{ strokeDashoffset: -22846.8, strokeDasharray: '500, 33434.2' }}></path>
        </svg>
      </div>
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  background: black;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;
