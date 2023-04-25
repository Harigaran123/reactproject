


  }

  return (
    <div>
      <table class="table" style={{ width: "30%", marginLeft: "35rem" }}>
        <thead>
          <tr>
            <th scope ="col">Author-Name</th>
            <th scope ="col">Author-Book</th>
          </tr>
        </thead>
        {post.map(handleItems)}
      </table>

    </div>
  );
}