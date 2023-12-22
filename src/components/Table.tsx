/* eslint-disable @typescript-eslint/no-explicit-any */
// Table.tsx
import { FC, useState, useCallback } from 'react';

interface TableColumn {
  label: string;
  key: string;
  editable?: boolean;
}

interface TableRow {
  id: number;
  isSelected: boolean;
  isEditing?: boolean;
  data: Record<string, any>;
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  onSelect: (id: number) => void;
  onDeleteSelected: (id: number) => void;
  onEdit: (id: number) => void;
  onSave: (id: number, newData: Record<string, any>) => void;
  onCancelEdit: (id: number) => void;
  onAdd: () => void;
}

const Table: FC<TableProps> = ({
  columns,
  rows,
  onSelect,
  onDeleteSelected,
  onEdit,
  onSave,
  onCancelEdit,
  onAdd,
}) => {
  const [editedData, setEditedData] = useState<Record<string, any>>({});

  const handleInputChange = useCallback((key: string, value: string) => {
    setEditedData((prevData) => ({ ...prevData, [key]: value }));
  }, []);

  const handleSave = useCallback((id: number) => {
    onSave(id, editedData);
    setEditedData({});
  }, [onSave, editedData]);

  return (
    <div>
      <button onClick={onAdd}>Добавить</button>
      <table>
        <thead>
          <tr>
            <th></th>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={row.isSelected}
                  onChange={() => onSelect(row.id)}
                />
              </td>
              {columns.map((column) => (
                <td key={column.key}>
                  {row.isEditing ? (
                    <input
                      type="text"
                      value={editedData[column.key] !== undefined ? editedData[column.key] : row.data[column.key]}
                      onChange={(e) => handleInputChange(column.key, e.target.value)}
                    />
                  ) : (
                    row.data[column.key]
                  )}
                </td>
              ))}
              <td>
                {row.isEditing ? (
                  <>
                    <button onClick={() => handleSave(row.id)}>Сохранить</button>
                    <button onClick={() => onCancelEdit(row.id)}>Отмена</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => onEdit(row.id)}>Изменить</button>
                    <button onClick={() => onDeleteSelected(row.id)}>Удалить</button>
                  </>

                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

