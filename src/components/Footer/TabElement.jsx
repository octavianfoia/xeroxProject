/* eslint-disable react/prop-types */
export const TabElement = ({ data }) => {
  return (
    <ul className="footer-table-content-container">
      <li className="tab-title">
        <a href={data.href}>{data.tabTitle}</a>
      </li>
      <ul className="tab-content-container">
        {data.content.map((elem, index) => (
          <li key={index}>
            <a href={elem.href}>{elem.itemTitle}</a>
          </li>
        ))}
      </ul>
    </ul>
  );
};
