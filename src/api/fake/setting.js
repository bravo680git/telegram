const setting = {
  info: {
    phone: "+84 388070776",
    name: "Quoc Nhien",
    status: "online",
  },
  notification: {
    private: {
      notification: true,
      preview: true,
    },
    group: {
      notification: true,
      preview: true,
    },
    channel: {
      notification: true,
      preview: true,
    },
    other: {
      join: true,
      sound: true,
    },
  },
  data: {
    download: {
      auto: true,
      photo: "On in all chats",
      video: "On in all chats",
      file: "Up to 3MB in all chats",
    },
    autoPlay: {
      gif: true,
      video: true,
    },
  },
  security: {
    security: {
      block: "none",
      twoStep: "off",
      session: "3 devices",
    },
    privacy: {
      phoneNumber: "My Contacts",
      lastSeen: "Everybody",
      profile: "Everybody",
      call: "Everybody",
      addLink: "Everybody",
      addGroup: "Everybody",
    },
    sensitive: {
      disableFilter: true,
    },
  },
};

export default setting;
