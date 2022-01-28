import { Form, Label, Input, Button } from 'reactstrap'
import { useContext } from 'react'
import  ExpenseContext  from '../../utils/ExpenseContext'

const ExpenseForm = () => {
  const {
    category,
    goalValue,
    actualValue,
    handleInputChange,
    handleAddExpense,
  } = useContext(ExpenseContext)



  return (
    <Form>
      <div className="mb-3">
        <Label htmlFor="category">Category</Label>
        <Input
          type="text"
          className="form-control"
          name="category"
          value={category}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="goal">Goal</Label>
        <Input
          type="text"
          className="form-control"
          name="goal"
          value={goalValue}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="actual">Actual</Label>
        <Input
          type="text"
          className="form-control"
          name="goal"
          value={actualValue}
          onChange={handleInputChange} />
      </div>
      <Button
        color="primary"
        onClick={handleAddExpense} >
        Add Expense
      </Button>
    </Form>
  )
}

export default ExpenseForm
