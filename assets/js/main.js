const boardList = document.getElementById("board-list");

const getList = async () => {
  // axios문법
  // let res = await axios.get("http://localhost:8081/list");
  let res = await axios.get("/api/board/list");
  console.log(res.data);

  let boards = res.data;
  let resultHTML = `
    <tr>
        <td>번호</td>
        <td>작성자</td>
        <td>작성일자</td>
        <td>조회수</td>
        <td>글제목</td>
    </tr>
  `;

  for (let i = 0; i < boards.length; i++) {
    resultHTML += `
        <tr>
            <td>${boards[i].b_idx}</td>
            <td>${boards[i].b_title}</td>
            <td>${boards[i].b_writer}</td>
            <td>${boards[i].b_datetime}</td>
            <td>${boards[i].b_count}</td>
        </tr>
    `;
  }

  boardList.innerHTML = resultHTML;
};

getList();
