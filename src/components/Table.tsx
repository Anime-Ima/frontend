const Table = () => {
  return (
    <table className='table table-striped mt-5'>
      <thead>
        <tr>
          <th scope='col'>Description</th>
          <th scope='col'>Amount</th>
          <th scope='col'>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <span className='fw-bold'>Total:</span> $424
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
