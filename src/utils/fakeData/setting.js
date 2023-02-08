const setting = {
  info: {
    phone: { value: "+84 388070776" },
    name: { value: "Quoc Nhien" },
    status: { value: "online" },
  },
  notification: {
    private: {
      notification: { value: true },
      preview: { value: true },
    },
    group: {
      notification: { value: true },
      preview: { value: true },
    },
    channel: {
      notification: { value: true },
      preview: { value: true },
    },
    other: {
      join: { value: true },
      sound: { value: true },
    },
  },
  data: {
    download: {
      auto: { value: true },
      photo: {
        value: "Contacts",
        autoDownload: {
          contacts: { value: true },
          private: { value: false },
          group: { value: false },
          channel: { value: false },
        },
      },
      video: {
        value: "On in all chats",
        autoDownload: {
          contacts: { value: true },
          private: { value: true },
          group: { value: true },
          channel: { value: true },
        },
      },
      file: {
        value: "Up to 3MB in all chats",
        autoDownload: {
          contacts: { value: true },
          private: { value: true },
          group: { value: true },
          channel: { value: true },
          maxSize: { value: 3 },
        },
      },
    },
    autoPlay: {
      gif: { value: true },
      video: { value: true },
    },
  },
  security: {
    security: {
      block: { value: "none" },
      twoStep: { value: "off" },
      session: { value: "3 devices" },
    },
    privacy: {
      phoneNumber: {
        value: "My Contacts",
        see: {
          everybody: { value: false },
          mycontacts: { value: true },
          nobody: { value: false },
        },
        exceptions: {
          never: { value: "Add users" },
          always: { value: "Add users" },
        },
      },
      lastSeen: {
        value: "Everybody",
        see: {
          everybody: { value: true },
          mycontacts: { value: false },
          nobody: { value: false },
        },
        exceptions: {
          never: { value: "Add users" },
        },
      },
      profile: {
        value: "Everybody",
        see: {
          everybody: { value: true },
          mycontacts: { value: false },
        },
        exceptions: {
          never: { value: "Add users" },
        },
      },
      call: {
        value: "My Contacts",
        cancall: {
          everybody: { value: false },
          mycontacts: { value: true },
          nobody: { value: false },
        },
        exceptions: {
          never: { value: "Add users" },
        },
        peertopeer: {
          everybody: { value: false },
          mycontacts: { value: true },
          nobody: { value: false },
        },
      },
      addLink: {
        value: "Everybody",
        add: {
          everybody: { value: true },
          mycontacts: { value: false },
          nobody: { value: false },
        },
        exceptions: {
          never: { value: "Add users" },
        },
      },
      addGroup: {
        value: "My Contacts",
        add: {
          everybody: { value: false },
          mycontacts: { value: true },
          nobody: { value: false },
        },
        exceptions: {
          never: { value: "Add users" },
          always: { value: "Add users" },
        },
      },
    },
    sensitive: {
      disableFilter: { value: true },
    },
    chat: {},
  },
  general: {
    setting: {
      size: { value: 16 },
      background: { value: null },
      animation: { value: true },
    },
    keyboard: {
      enter: { value: true },
      ctrlEnter: { value: false },
    },
    time: {
      half: { value: true },
      full: { value: false },
    },
    emoji: {
      suggest: { value: true },
      large: { value: true },
    },
    sticker: {
      quick: { value: true },
      suggest: { value: true },
      loop: { value: true },
      cherry: { value: true },
    },
  },
  folder: {},
  device: {
    rightText: 3,
    device: {
      osNum: "HCM city",
    },
    sessions: {},
  },
  language: {
    rightText: "English",
    list: {
      en: { value: true },
      be: { value: false },
      ca: { value: false },
      du: { value: false },
    },
  },
};

export default setting;
