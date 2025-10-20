import React, { useState } from "react";
import InputField from "./InputField";
import styles from "../../Styles/ContactForm.module.css";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("名前：", name);
    console.log("メールアドレス：", email);
    console.log("本文：", form);

    if (!validate()) {
      console.log("バリデーションエラー：", errors);
      return;
    }

    setIsLoading(true);

    const payload = { name, email, message: form };
    try {
      const response = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        console.log("送信完了");
        alert("送信しました");

        setName("");
        setEmail("");
        setForm("");
        setErrors({});
      } else {
        console.log("送信失敗", response.status);
        alert("送信に失敗しました。");
      }
    } catch (errors) {
      console.error("通信エラー", errors);
      alert("通信エラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "名前を入力してください";
    } else if (name.trim().length > 30) {
      newErrors.name = "名前は30文字以内で入力してください";
    }
    if (!email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (!form.trim()) {
      newErrors.form = "お問い合わせ内容を入力してください";
    } else if (form.trim().length > 500) {
      newErrors.form = "お問い合わせ内容は500文字以内で入力してください";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setForm("");
    setErrors("");
  };
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit} noValidate>
      <div className={styles.contactTitle}>
        <h1>問合せフォーム</h1>
      </div>
      <InputField
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        errors={errors}
        disabled={isLoading}
      />
      <TextArea
        form={form}
        setForm={setForm}
        errors={errors}
        disabled={isLoading}
      />
      <div className={styles.flexButton}>
        <SubmitButton disabled={isLoading} />
        <ClearButton onClick={handleClear} disabled={isLoading} />
      </div>
    </form>
  );
}
