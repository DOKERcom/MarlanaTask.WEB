
SetModal("createBlockModal");

SetModal("createTaskModal");

function EditBlockModal(blockname) {
    if (blockname.length > 0) {

        var _editBlockModal = document.getElementById("_editBlockModal");

        var editBlockspan = document.getElementById("close_editBlockModal");

        editBlockspan.onclick = function () {
            _editBlockModal.style.display = "none";
        }

        ReplaceElement("edit_header_name_id", "h2", "edit_userlogin_id", null, null, "Editing Block: "+blockname, null, null);

        ReplaceElement("editBlockModal_submit_button", "input", "inputedit_changename_id", "Update block", "submit", null, "onclick", "ChangeNameBlock('" + blockname + "', document.getElementById('ChangeBlockName').value)");

        _editBlockModal.style.display = "block";

    } else {
        alert("Blockname Undefined");
    }
}


function SetModal(basename) {
    var _BlockModal = document.getElementById("_" + basename);

    var BlockModal = document.getElementById(basename);

    var BlockSpan = document.getElementById("close_" + basename);

    if (BlockModal != null && _BlockModal != null && BlockSpan != null)
    {
        BlockModal.onclick = function () {
            _BlockModal.style.display = "block";
        }

        BlockSpan.onclick = function () {
            _BlockModal.style.display = "none";
        }
    }
}


function ReplaceElement(motherAttributeId, attribute, attributeId, attributeValue, attributeType, attributeInnerHtml, setAttributeType, setAttributeValue) {

    if (motherAttributeId != null && attribute != null && attributeId != null) {
        var editchangepass = document.createElement(attribute);

        editchangepass.id = attributeId;

        if (attributeValue != null)
            editchangepass.value = attributeValue;
        if (attributeType != null)
            editchangepass.type = attributeType;
        if (attributeInnerHtml != null)
            editchangepass.innerHTML = attributeInnerHtml;


        if (setAttributeType != null && setAttributeValue != null)
            editchangepass.setAttribute(setAttributeType, setAttributeValue);

        document.getElementById(motherAttributeId).childNodes.forEach(function (child) {
            if (child.id == attributeId)
                document.getElementById(motherAttributeId).removeChild(document.getElementById(attributeId));
        });
                
        document.getElementById(motherAttributeId).insertBefore(editchangepass, document.getElementById(motherAttributeId).firstChild);
    }
}