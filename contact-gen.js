let contactList = [
    ["https://github.com/Megarion", "GitHub"],
    ["https://megarion.itch.io/", "Itch.io"],
    ["https://www.youtube.com/channel/UCBrlr_nVSQ_4kZtsY58Q8wA", "YouTube"],
    ["javascript:alert('Megarion#0892');", "Discord"],
]

let contactListRep = ["#link", "#title"];

let contactTemplate = '<li class="nav-item"><a class="nav-link active" href="#link">#title</a></li>';
let contactTemplateAlt = '<a class="link-secondary" href="#link">#title</a>';

function contactGen() {
    let content = '';
    for (let i = 0; i < contactList.length; i++) {
        let contactSel = contactList[i];

        let contactEdit = "";

        contactEdit += contactTemplate;
        for (let j = 0; j < contactListRep.length; j++) {
            let re = new RegExp(contactListRep[j], 'g');
            contactEdit = contactEdit.replace(re, contactSel[j]);
        }

        content+=contactEdit;
    }
    return content;
}

function contactGenAlt() {
    let content = '';
    for (let i = 0; i < contactList.length; i++) {
        let contactSel = contactList[i];

        let contactEdit = "";

        contactEdit += contactTemplateAlt;
        for (let j = 0; j < contactListRep.length; j++) {
            let re = new RegExp(contactListRep[j], 'g');
            contactEdit = contactEdit.replace(re, contactSel[j]);
        }

        content+=contactEdit;
    }
    return content;
}