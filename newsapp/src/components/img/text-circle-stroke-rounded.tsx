import React from "react"; 

const TextCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M10.3175 16.9775H11.9657M11.9657 16.9775H13.6301M11.9657 16.9775V7.4986M7.00486 9.21775C6.86716 8.16066 7.14307 7.69382 8.11503 7.43245C10.6056 6.76269 13.3077 6.87472 15.8115 7.49286C16.7545 7.72567 17.0765 8.14056 16.9427 9.21775" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default TextCircleIcon;