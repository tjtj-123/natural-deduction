window.onload = function() {
    // 전체 컨테이너
    const container = document.createElement('div');
    container.style.maxWidth = '900px';
    container.style.margin = '0 auto';
    container.style.fontFamily = 'sans-serif';

    // 제목
    const title = document.createElement('h1');
    title.textContent = '자연연역 연습장';
    container.appendChild(title);

    // 안내문
    const guide = document.createElement('p');
    guide.textContent = '자연연역을 연습할 수 있는 공간입니다. 아래에 문제를 입력하고 복합명제를 추가하세요.';
    container.appendChild(guide);

    // 문제 입력 textarea
    const problemInput = document.createElement('textarea');
    problemInput.rows = 5;
    problemInput.cols = 100;
    problemInput.style.width = '100%';
    problemInput.placeholder = '문제를 입력하세요.';
    problemInput.value =
`아담이 백만장자라면, 가난은 이브가 그의 청혼을 거절한 이유가 아니다.
그런데 이브가 그의 청혼을 거절한 이유는 아담이 가난하다는 것 또는 그가 매력이 없다는 것 둘 중의 하나이다.
아담은 백만장자이다. 그러므로 매력이 없다는 것이 아담이 청혼을 거절당한 이유임에 틀림없다.`;
    container.appendChild(problemInput);

    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // 복합명제 상자
    const complexBox = document.createElement('div');
    complexBox.style.border = '1px solid #ccc';
    complexBox.style.padding = '16px';
    complexBox.style.marginBottom = '16px';
    complexBox.style.background = '#fafafa';

    // 복합명제 입력
    const complexInput = document.createElement('input');
    complexInput.type = 'text';
    complexInput.placeholder = '복합명제를 입력하세요.';
    complexInput.style.width = '400px';
    complexInput.style.display = 'block';
    complexInput.style.marginBottom = '12px';
    complexBox.appendChild(complexInput);

    // 복합명제 리스트(ul)
    const complexList = document.createElement('ul');
    complexList.style.margin = '0';
    complexList.style.paddingLeft = '20px';
    const complexItems = [
        '1. 아담이 백만장자라면, 가난은 이브가 그의 청혼을 거절한 이유가 아니다. [X]',
        '2. 그런데 이브가 그의 청혼을 거절한 이유는 아담이 가난하다는 것 또는 그가 매력이 없다는 것 둘 중의 하나이다.',
        '3. 아담은 백만장자이다. [X]',
        '4. (결론) 그러므로 매력이 없다는 것이 아담이 청혼을 거절당한 이유임에 틀림없다.'
    ];
    for (let item of complexItems) {
        const li = document.createElement('li');
        li.textContent = item;
        complexList.appendChild(li);
    }
    complexBox.appendChild(complexList);
    container.appendChild(complexBox);

    // 단순명제 상자
    const simpleBox = document.createElement('div');
    simpleBox.style.border = '1px solid #ccc';
    simpleBox.style.padding = '16px';
    simpleBox.style.background = '#fafafa';
    simpleBox.style.marginBottom = '16px';

    // 단순명제 입력
    const simpleInput = document.createElement('input');
    simpleInput.type = 'text';
    simpleInput.placeholder = '단순명제를 입력하세요.';
    simpleInput.style.width = '400px';
    simpleInput.style.display = 'block';
    simpleInput.style.marginBottom = '12px';
    simpleBox.appendChild(simpleInput);

    // 단순명제 리스트(ul)
    const simpleList = document.createElement('ul');
    simpleList.style.margin = '0';
    simpleList.style.paddingLeft = '20px';
    const simpleItems = [
        'A. 아담은 백만장자다. [X]',
        'B. 가난은 이브가 아담의 청혼을 거절한 이유다 [X]',
        'C. 매력이 없다는 것은 이브가 아담의 청혼을 거절한 이유다 [X]'
    ];
    for (let item of simpleItems) {
        const li = document.createElement('li');
        li.textContent = item;
        simpleList.appendChild(li);
    }
    simpleBox.appendChild(simpleList);
    container.appendChild(simpleBox);

     // 전체 컨테이너

    container.style.maxWidth = '900px';
    container.style.margin = '40px auto';
    container.style.fontFamily = 'sans-serif';

    // 입력 영역 (상단)
    const inputRow = document.createElement('div');
    inputRow.style.display = 'flex';
    inputRow.style.alignItems = 'center';
    inputRow.style.gap = '8px';
    inputRow.style.marginBottom = '8px';

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.value = 'C';
    input1.style.width = '60px';
    inputRow.appendChild(input1);

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.value = '2';
    input2.style.width = '40px';
    inputRow.appendChild(input2);

    const input3 = document.createElement('input');
    input3.type = 'text';
    input3.value = '5';
    input3.style.width = '40px';
    inputRow.appendChild(input3);

    const input4 = document.createElement('input');
    input4.type = 'text';
    input4.style.width = '80px';
    inputRow.appendChild(input4);

    // 드롭다운
    const select = document.createElement('select');
    const selectOptions = [
        '선언기호제거 (∨제거)', '조건기호제거 (→제거)', '연언기호제거 (∧제거)',
        '선언기호도입 (∨도입)', '조건기호도입 (→도입)', '연언기호도입 (∧도입)',
        '쌍조건기호도입 (↔도입)', '쌍조건기호제거 (↔제거)', '부정기호제거 (¬제거)', '부정기호도입 (¬도입)'
    ];
    for (let opt of selectOptions) {
        const option = document.createElement('option');
        option.textContent = opt;
        select.appendChild(option);
    }
    select.selectedIndex = 0;
    inputRow.appendChild(select);

    container.appendChild(inputRow);

    // 버튼 영역 (동작 없음)
    const btnRow = document.createElement('div');
    btnRow.style.display = 'flex';
    btnRow.style.alignItems = 'center';
    btnRow.style.gap = '6px';
    btnRow.style.marginBottom = '12px';

    const btnNames = ['추가', '가정 [ [', ']] 가정', '~', '∧', '∨', '→', '↔'];
    for (let name of btnNames) {
        const btn = document.createElement('button');
        btn.textContent = name;
        btn.disabled = true; // 동작하지 않게
        btn.style.opacity = '0.7';
        btnRow.appendChild(btn);
    }
    container.appendChild(btnRow);

    // 증명 리스트 박스
    const proofBox = document.createElement('div');
    proofBox.style.border = '1px solid #ccc';
    proofBox.style.background = '#fafafa';
    proofBox.style.padding = '12px';
    proofBox.style.marginBottom = '20px';

    // 증명 리스트 (table로 정렬)
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '1rem';

    const proofData = [
        ['1.', 'A→¬B', '전체', '[X]'],
        ['2.', 'B∨C', '전체', '[X]'],
        ['3.', 'A', '전체', '[X]'],
        ['4.', 'C', '결론', '[X]'],
        ['5.', '¬B', '1,3, → 제거', '[X]']
    ];

    for (let i = 0; i < proofData.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < proofData[i].length; j++) {
            const td = document.createElement('td');
            td.textContent = proofData[i][j];
            if (j === 0) {
                td.style.width = '40px';
                td.style.textAlign = 'right';
            }
            if (j === 1) {
                td.style.width = '160px';
                td.style.fontWeight = 'bold';
                td.style.paddingLeft = '10px';
            }
            if (j === 2) {
                td.style.width = '120px';
                td.style.textAlign = 'center';
                td.style.color = '#888';
            }
            if (j === 3) {
                td.style.width = '60px';
                td.style.textAlign = 'center';
                td.style.color = 'red';
                td.style.fontWeight = 'bold';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    proofBox.appendChild(table);
    container.appendChild(proofBox);

    // 학번과 이름
    const info = document.createElement('div');
    info.style.marginTop = '40px';
    info.style.textAlign = 'right';
    info.textContent = '20223091 서준영'; // ← 본인 학번과 이름으로 수정
    
    container.appendChild(info);



    const infos = document.createElement('div');
    infos.style.marginTop = '40px';
    infos.style.textAlign = 'right';
    infos.textContent = 'https://github.com/tjtj-123/natural-deduction'; // ← 본인 학번과 이름으로 수정
    
    container.appendChild(infos);
    // body에 추가
    document.body.innerHTML = '';
    document.body.appendChild(container);
};