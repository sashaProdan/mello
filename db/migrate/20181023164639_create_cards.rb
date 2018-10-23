class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, nil: false
      t.date :due_date
      t.text :labels, array: true, default: []
      t.text :description
      t.references :list

      t.timestamps
    end
  end
end
