//get actual ROW In datagrid

var itemSource = dataGridStudents.ItemsSource as List<StudentViewModel>;

foreach (var item in itemSource)
{
	var row = dataGridStudents.ItemContainerGenerator.ContainerFromItem(item) as DataGridRow;
	row.Background = item.FirstName.Contains((sender as TextBox).Text) ? Brushes.IndianRed : Brushes.White;
}



//change property of Model and use Binding
        private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            var itemSource = dataGridStudents.ItemsSource as List<StudentViewModel>;

            foreach (var item in itemSource)
            {
                if((sender as TextBox).Text == "")
                {
                    item.RowBrush = Brushes.White;
                    continue;
                }

                if(item.FirstName.Contains((sender as TextBox).Text))
                {
                    item.RowBrush = Brushes.Red;
                }
            }

            dataGridStudents.Items.Refresh();
        }
        
        <DataGrid HorizontalAlignment="Left" Name="dataGridStudents" Height="362" Margin="38,10,0,0" VerticalAlignment="Top" Width="709" AutoGenerateColumns="False">
            <DataGrid.RowStyle>
                <Style TargetType="DataGridRow">
                    <Setter Property="Background" Value="{Binding RowBrush}"></Setter>
                </Style>
            </DataGrid.RowStyle>
            <DataGrid.Columns>
                <DataGridTextColumn Foreground="{Binding RowBrush}" Header="First Name" Width="*" IsReadOnly="True" Binding="{Binding FirstName}"></DataGridTextColumn>
                <DataGridTextColumn Header="Last Name" Width="*" IsReadOnly="True" Binding="{Binding LastName}"></DataGridTextColumn>
                <DataGridTextColumn Header="Age" Width="*" IsReadOnly="True" Binding="{Binding Age}"></DataGridTextColumn>
            </DataGrid.Columns>
        </DataGrid>