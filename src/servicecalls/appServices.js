import { AppSelect, AppTextField } from "../layoutElements/inputElements";
import _ from "lodash";

export const handleInputChange = async (e, values, setValues) => {
  let obj;
  if (e.type === "file") {
    obj = { ...values, [e.name]: e.file };
  } else if (e.type === "dateTimePicket") {
    obj = { ...values, [e.name]: e?.value };
  } else if (e.type === "timePicket") {
    obj = { ...values, [e.name]: e?.value };
  } else if (e.type === "multiFile") {
    var files;
    if (e.status === "done") {
      files = values?.file ? [...values.file, e.file] : [e.file];
    } else {
      const i = values.file.findIndex(
        (file) => file.lastModified === e.file.lastModified
      );
      values.file.splice(i, 1);
      files = values.file;
    }
    obj = { ...values, [e.name]: files };
  } else if (e.type === "multiFileDropZone") {
    var files;
    obj = { ...values, [e.name]: e.file };
  } else if (e.type === "declaration") {
    obj = { ...values, [e.name]: e.value };
  } else if (e.type === "ckeditor") {
    obj = { ...values, [e.name]: e.data };
  } else if (e.type === "accessControl") {
    let curr = e.currValues;
    let accessObj = { ...curr.access };
    if (accessObj[e.name] && accessObj[e.name].includes(e.value)) {
      accessObj = { ...accessObj, [e.name]: e.value.slice(0, -1) };
    } else {
      accessObj = { ...accessObj, [e.name]: e.value };
    }

    obj = { ...values, access: accessObj };
  } else if (e.type === "checkbox") {
    const checkedArr = values[e.name] ?? [];
    const getArr = () => {
      if (
        e.target.checked &&
        (!values[e.name] || !values[e.name].includes(e.value))
      ) {
        return [...checkedArr, e.value];
      } else if (
        !e.target.checked &&
        values[e.name] &&
        values[e.name].includes(e.value)
      ) {
        checkedArr.splice(checkedArr.indexOf(e.value), 1);
        return checkedArr;
      }
    };
    obj = { ...values, [e.name]: getArr() };
  } else if (e.type === "single-checkbox") {
    obj = { ...values, [e.name]: e.value };
  } else if (!e.target && !e.type) {
    if (e.name.includes(".")) {
      const name = e.name.split(".");
      obj = {
        ...values,
        [name[0]]: {
          ...values[name[0]],
          [name[1]]: e.value,
        },
      };
    } else {
      obj = { ...values, [e.name]: e.value };
    }
  } else if (e.target.name.includes(".")) {
    const name = e.target.name.split(".");
    obj = {
      ...values,
      [name[0]]: {
        ...values[name[0]],
        [name[1]]: e.target.value,
      },
    };
  } else if (e.target?.getAttribute("data-mask") === "mask") {
    obj = { ...values, [e.target.name]: e.target.value.trim() };
  } else {
    //   alert ("here")
    obj = { ...values, [e.target.name]: e.target.value };
  }

  setValues(_.pickBy(obj, _.identity));
};

export function renderElements(ele) {
  switch (ele?.type) {
    case 1:
      return <AppTextField {...ele} />;
    case 2:
      return <AppSelect {...ele} />;

    default:
      return null;
  }
}
