import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

import SlideTransition from "components/SlideTransition";
import AvatarItem from "components/AvatarItem";
import ChatItem from "components/ChatItem";
import Button from "components/Button";
import { setSidebarControl } from "store/slices/controlSlices";
import { useDebounce } from "hooks";
import style from "./SidebarLayout.module.scss";

import { contacts as fakeContacts } from "utils/fakeData";

const cx = classnames.bind(style);

function NewGroupSidebar({ actived }) {
  const dispatch = useDispatch();
  const [groupMembers, setGroupMembers] = useState([]);
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 200);
  const [contacts, setContacts] = useState(fakeContacts);

  const handleBack = () => {
    dispatch(setSidebarControl("main"));
  };

  const toggleMember = (id) => {
    const member = contacts.find((user) => user.id === id);
    if (groupMembers.find((mem) => mem.id === member.id)) {
      setGroupMembers(groupMembers.filter((grMem) => grMem.id !== member.id));
    } else {
      setGroupMembers([...groupMembers, member]);
    }
  };

  const removeMember = (id) => {
    setGroupMembers(groupMembers.filter((grMem) => grMem.id !== id));
  };

  useEffect(() => {
    if (!actived) {
      setGroupMembers([]);
    }
  }, [actived]);

  useEffect(() => {
    const regex = new RegExp(searchDebounce, "i");
    const filterContact = fakeContacts.filter((contact) =>
      regex.test(contact.name)
    );
    setContacts(filterContact);
  }, [searchDebounce]);

  return (
    <SlideTransition actived={actived} enable>
      <div className={cx("new-group")}>
        <div className={cx("header")}>
          <div className={cx("back")} onClick={handleBack}>
            <AiOutlineArrowLeft />
          </div>
          <div className={cx("title")}>Add Members</div>
        </div>

        <div className={cx("body")}>
          <div className={cx("members")}>
            {groupMembers.map((member) => (
              <div
                key={member.id}
                className={cx("member")}
                onClick={() => removeMember(member.id)}
              >
                <div className={cx("avatar")}>
                  <AvatarItem name={member.name} />
                  <div className={cx("remove-icon")}>
                    <IoIosClose />
                  </div>
                </div>
                <div className={cx("name")}>{member.name}</div>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add people..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={cx("seperate")}>
            <div></div>
          </div>

          <div className="contacts">
            {contacts.map((contact) => (
              <ChatItem
                key={contact.id}
                data={contact}
                onClick={() => toggleMember(contact.id)}
                checked={groupMembers.find((mem) => mem.id === contact.id)}
                checkbox
                hover
                animation
              />
            ))}
          </div>

          <div className={cx("next-btn", { show: groupMembers.length > 0 })}>
            <Button>
              <AiOutlineArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </SlideTransition>
  );
}

export default NewGroupSidebar;
