class CreateOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :options do |t|
      t.references :user, null: false, foreign_key: true
      t.datetime :expires_on
      t.decimal :strike_price
      t.binary :opt_type
      t.string :magic_number
      t.string :contract_address

      t.timestamps
    end
  end
end
