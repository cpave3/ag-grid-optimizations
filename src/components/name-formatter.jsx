import * as React from 'react';

// const NameFormatter = React.memo(({ value }) => {
//   const renderCountRef = React.useRef(1);
//   return (
//     <strong>
//       {`(${renderCountRef.current++}) ${value}`}
//     </strong>
//   );
// });

function NameFormatter({ value }) {
  const renderCountRef = React.useRef(1);
  return (
    <strong>
      (
      {renderCountRef.current++}
      )
      {' '}
      {value}
    </strong>
  );
}

export default NameFormatter;

// const RenderCounterCellRenderer = memo((params) => {
//   const renderCountRef = useRef(1);
//   return (
//       <span className="my-renderer">
//           <span className="render-count">({renderCountRef.current++})</span> {params.value}
//       </span>
//   );
// });
