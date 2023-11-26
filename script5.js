document.addEventListener("DOMContentLoaded", function() {
    const membersList = document.getElementById("members-list");
    const addMemberBtn = document.getElementById("add-member-btn");
    const memberModal = document.getElementById("memberModal");
    const memberForm = document.getElementById("memberForm");
    const closeModalBtn = document.querySelector(".close");

    let editingMemberId = null;

    addMemberBtn.addEventListener("click", () => {
        openModal();
    });

    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    memberForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const memberName = document.getElementById("memberName").value;
        const memberRole = document.getElementById("memberRole").value;

        if (editingMemberId) {
            editMember(editingMemberId, memberName, memberRole);
        } else {
            addMember(memberName, memberRole);
        }

        closeModal();
    });

    const initialMembers = [
        { id: 1, name: "John Doe", role: "Developer" },
        { id: 2, name: "Jane Doe", role: "Designer" },
    ];

    initialMembers.forEach(member => {
        addMemberToDOM(member);
    });

    function addMemberToDOM(member) {
        const listItem = document.createElement("li");
        listItem.className = "member";
        listItem.innerHTML = `
            <span>${member.name} - ${member.role}</span>
            <button class="edit-btn" data-id="${member.id}">Edit</button>
            <button class="delete-btn" data-id="${member.id}">Delete</button>
        `;
        membersList.appendChild(listItem);

        const editBtn = listItem.querySelector(".edit-btn");
        const deleteBtn = listItem.querySelector(".delete-btn");

        editBtn.addEventListener("click", () => {
            editingMemberId = member.id;
            openModal();
            populateForm(member);
        });

        deleteBtn.addEventListener("click", () => {
            deleteMember(member.id);
        });
    }

    function addMember(name, role) {
        const newMember = {
            id: Date.now(),
            name: name,
            role: role,
        };

        initialMembers.push(newMember);
        addMemberToDOM(newMember);
    }

    function editMember(id, name, role) {
        const index = initialMembers.findIndex(member => member.id === id);

        if (index !== -1) {
            initialMembers[index].name = name;
            initialMembers[index].role = role;

            const listItem = membersList.querySelector(`.member[data-id="${id}"]`);
            listItem.innerHTML = `<span>${name} - ${role}</span>
                                 <button class="edit-btn" data-id="${id}">Edit</button>
                                 <button class="delete-btn" data-id="${id}">Delete</button>`;
        }
    }

    function deleteMember(id) {
        const index = initialMembers.findIndex(member => member.id === id);

        if (index !== -1) {
            initialMembers.splice(index, 1);
            const listItem = membersList.querySelector(`.member[data]`);
            listItem.remove();
        }
    }
    function addMember() {
        const memberID = document.getElementById('memberID').value;
        const fullName = document.getElementById('fullName').value;
        const age = document.getElementById('age').value;
        const department = document.getElementById('department').value;
        const joiningDate = document.getElementById('joiningDate').value;
    
        const tableBody = document.getElementById('memberTableBody');
    
        const newRow = tableBody.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
    
        cell1.textContent = memberID;
        cell2.textContent = fullName;
        cell3.textContent = age;
        cell4.textContent = department;
        cell5.textContent = joiningDate;
    
        document.getElementById('memberID').value = '';
        document.getElementById('fullName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('department').value = '';
        document.getElementById('joiningDate').value = '';
    }
    

    function showDeleteModal(memberId) {
        const deleteModal = document.getElementById('deleteModal');
        deleteModal.style.display = 'block';
      
        const confirmDeleteBtn = document.getElementById('confirmDelete');
        const cancelDeleteBtn = document.getElementById('cancelDelete');
      
        confirmDeleteBtn.addEventListener('click', function () {
          deleteMember(memberId);
          deleteModal.style.display = 'none';
        });
      
        cancelDeleteBtn.addEventListener('click', function () {
          deleteModal.style.display = 'none';
        });
      }
      
      function deleteMember(memberId) {
        const memberElement = document.getElementById(memberId);
        if (memberElement) {
          memberElement.remove();
        }
      }

    function openModal() {
        memberForm.reset();
        memberModal.style.display = "block";
    }

    function closeModal() {
        editingMemberId = null;
        memberModal.style.display = "none";
    }

    function populateForm(member) {
        document.getElementById("memberName").value = member.name;
        document.getElementById("memberRole").value = member.role;
    }

    window.addEventListener("click", (event) => {
        if (event.target === memberModal) {
            closeModal();
        }
    });
});


