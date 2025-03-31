function SubscriberForm() {
    return (
      <form>
        <label htmlFor="name">
          Enter Your Name:
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="email">
          Your Email:
          <input id="email" type="email" name="email" />
        </label>
      </form>
    );
  }
  
  export default SubscriberForm;